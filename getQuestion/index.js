const axios = require('axios');
const readline = require('readline');
const fs = require('fs');
const cheerio = require('cheerio');
const OpenAI = require("openai");
let cacheData = require('./data.json');

const key = "sk-2ZnMEhCVKev3WBdnQlO0BV8jtSgzC7Oo5YZ95cHzWFcKG0c6"


const client = new OpenAI({
    apiKey: key,
    baseURL: "https://api.moonshot.cn/v1",
});

let history = Array.from([
    { "role": "system", "content": "你是一个资深前端开发，回答下面的问题" }
])

function showLoading() {
    const spinner = ['|', '/', '-', '\\'];
    let i = 0;

    const interval = setInterval(() => {
        readline.cursorTo(process.stdout, 0);  // 移动光标到行首
        process.stdout.write(`Loading ${spinner[i]}`);
        i = (i + 1) % spinner.length;
    }, 100);

    return interval;
}

function stopLoading(interval) {
    clearInterval(interval);
    readline.cursorTo(process.stdout, 0);
    process.stdout.write('Done!\n');
}


async function chat(id, prompt) {
    history.push({
        role: "user", content: prompt
    })
    const loadingInterval = showLoading();
    const completion = await client.chat.completions.create({
        model: "moonshot-v1-8k",
        messages: history,
    });
    history = history.concat(completion.choices[0].message)
    stopLoading(loadingInterval);
    cacheData.push({
        id: id,
        answer: completion.choices[0].message.content
    })
    fs.writeFileSync('./data.json', JSON.stringify(cacheData, null, 4));
    cacheData = require('./data.json');
    return completion.choices[0].message.content;
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 提问函数
function askQuestion(query) {
    return new Promise(resolve => rl.question(query, resolve));
}
const getList = async () => {
    const url = "https://api.mianshiya.com/api/question_bank/list/page/vo"
    const params = { "current": 1, "pageSize": "127", "tagList": ["前端"] }
    const { code, data } = (await axios.post(url, params)).data
    if (code === 0) {
        return data.records
    } else {
        console.log("请求失败", data);
        return []
    }
}
const getQuestionList = async (id) => {
    const url = "https://www.mianshiya.com/bank/" + id
    const html = (await axios.get(url)).data
    const $ = cheerio.load(html);
    const cells = $('td.ant-table-cell');
    const list = []
    cells.each((index, element) => {
        const td = $(element);
        if (td.children().length === 1 && td.find('a[href]').length === 1) {
            const href = td.find('a').attr('href');
            list.push({
                index,
                id: href,
                title: td.text()
            })
        }
    });
    return list
}

async function main() {

    const bookList = await getList()
    bookList.forEach((book, index) => {
        console.log(`${index}: ${book.title.replace("面试", "**")}`)
    });
    let questionList = []
    let index = 0;
    const input = await askQuestion('请输入题集序号: ');
    const trimmedInput = input.trim();
    if (trimmedInput === "") {
        console.log('输入不能为空，请重新输入。');
    } else {
        const parsedIndex = parseInt(trimmedInput, 10);
        if (isNaN(parsedIndex)) {
            console.log('请输入有效的数字。');
        } else {
            index = parsedIndex;
            console.log('题集序号:', index);
        }
    }
    const id = bookList[index].id
    questionList = await getQuestionList(id)
    let currentQuestionIndex = 0;
    console.log('回复1表示查看答案')
    async function askQuestionList() {
        if (currentQuestionIndex < questionList.length) {
            const question = questionList[currentQuestionIndex].title;
            const id = questionList[currentQuestionIndex].id;
            const answer = await askQuestion(question);
            if (answer == 1) {
                const data = cacheData.find(item => item.id === id);
                if (data) {
                    console.log(data.answer)
                } else {
                    reply = await chat(id, question)
                    console.log(reply);
                }

            }
            currentQuestionIndex++;
            askQuestionList();
        } else {
            console.log('Thank you for your answers!');
        }
    }
    askQuestionList();
}
main()