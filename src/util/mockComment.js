import Mock from 'mockjs';

Mock.mock('/comment',{
    "data|1-10":[{
        "id": "@id",
        "urlAvatar": "../../src/data/avatar/@pick(['chantal','denise','dudu','james','jane','lorella','olia','sarah','yuri']).png",
        "username":"@name",
        "date": "@datetime",
        "rating": "@natural(0,5)",
        "content": "@sentence"
    }]
});