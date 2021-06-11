# proffy-api

 ## Get Started

 Before you begin, you will need to have the following tool installed on your machine [Git](https://git-scm.com). </br>
NodeJs [NodeJs](https://nodejs.org/en/). </br>
In addition to having an editor to work with the code like [VSCode](https://code.visualstudio.com/). </br>

 ```shell
# clone this repository
git clone https://github.com/lisandracabe/proffy-api.git

 # select repository
cd proffy-api

 # install dependencies
npm install

 # start web application
npm run start
```
## API
### Post new Class
Save Class
```shell
[POST] /classes
```
Body
```JSON
{
  "name": "joão",
  "avatar": "avatar",
  "whatsapp": "45999999999",
  "bio": "bio",
  "subject": "Matemática",
  "cost": 10,
  "schedule": [{
    "week_day": 1,
    "from": "08:00",
    "to": "10:00"
  }]
}

```
Status: 201 (created)

 ### Get Classes
Return classes filtered by week dat, subject and time
```shell
[GET] /classes
```
QueryParams
```
week_day: 1
subject: Matemática
time: 08:00
```
Status: 200
```JSON
[
  {
    "id": 2,
    "subject": "Matemática",
    "cost": 10,
    "user_id": 2,
    "name": "joão",
    "avatar": "avatar",
    "whatsapp": "53991097040",
    "bio": "bio"
  }
]
 ```
