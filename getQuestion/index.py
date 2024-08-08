import requests
from bs4 import BeautifulSoup

from openai import OpenAI

url = "https://www.mianshiya.com"

key = "sk-2ZnMEhCVKev3WBdnQlO0BV8jtSgzC7Oo5YZ95cHzWFcKG0c6"

client = OpenAI(
    api_key=key,
    base_url="https://api.moonshot.cn/v1",
)


def getList():
    url = "https://api.mianshiya.com/api/question_bank/list/page/vo"
    data = {"current": 1, "pageSize": "127", "tagList": ["前端"]}
    res = requests.post(url=url, json=data).json()
    if res["code"] == 0:
        data = []
        for i in res["data"]["records"]:
            data.append(
                {
                    "id": i["id"],
                    "title": i["title"].replace("面试", "-"),
                }
            )
        return data
    else:
        return []


def getDetail(id):
    url = "https://www.mianshiya.com/bank/" + id
    response = requests.get(url=url)
    response.raise_for_status()
    soup = BeautifulSoup(response.text, "html.parser")
    cells = soup.find_all("td", class_="ant-table-cell")
    list = []
    count = 0
    for cell in cells:
        if "VIP" in cell.text:
            continue
        else:
            list.append({"title": cell.text, "id": count})
            count += 1
    return list


def main():
    bookList = getList()
    if len(bookList):
        for index in range(len(bookList)):
            print("{} {}".format(index, bookList[index]["title"]))
        index = input("请输入题目序号:")
        id = bookList[int(index)]["id"]
        questionList = getDetail(id)
        for question in questionList:
            print("{}.{}".format(question["id"], question["title"]))
            ans = input("kimi查看答案:")
            if ans == 1:
                completion = client.chat.completions.create(
                    model="moonshot-v1-8k",
                    messages=[
                        {
                            "role": "system",
                            "content": "你是一个资深前端开发，回答下面的问题",
                        },
                        {
                            "role": "user",
                            "content": question["title"],
                        },
                    ],
                    temperature=0.3,
                )
                print(completion.choices[0].message)
            else:
                continue

    else:
        print("没有题目")


if __name__ == "__main__":
    main()
