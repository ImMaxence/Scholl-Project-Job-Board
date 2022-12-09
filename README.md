# Documentation

# FRONT-END

## Preview :
>
![login](https://user-images.githubusercontent.com/110362553/206721995-4fb08c75-cb88-4e06-904a-ed1f1bbb02ed.png)
![main](https://user-images.githubusercontent.com/110362553/206721990-6ee2b5bd-fa28-4760-99af-221213cc5d14.png)
![exxx](https://user-images.githubusercontent.com/110362553/206721993-8dd02553-a265-4a9c-a527-62dbf1d35469.png)
![bdd](https://user-images.githubusercontent.com/110362553/206721984-0db347c8-f856-4161-b657-4d5820e7c2f0.png)
![bdd4](https://user-images.githubusercontent.com/110362553/206721986-dc4a22ee-b35c-471f-b102-e751d6148e41.png)

# BACK-END
## Use the CRUD Api

### People's table :
| Method | Link | Description | 
|:----------:|:-------------:|:------:| 
| GET | [http://localhost:8080/api/people/](http://localhost:8080/api/people) | Select all information except password without using params |
| GET | [http://localhost:8080/api/people/?firstname=maxence&lastname=laporte](http://localhost:8080/api/people/?firstname=maxence&lastname=laporte) | Select all information except password by using params (id, lastname, firstname, email, username, isAdmin)|
| POST | [http://localhost:8080/api/people/register](http://localhost:8080/api/people/register) | Insert information to DataBase with body key (lastname, firstname, birthDate, pictureDataPeople, email, username, password) |
| POST | [http://localhost:8080/api/people/login](http://localhost:8080/api/people/login) | Select password information with body key (email) |
| DELETE | [http://localhost:8080/api/people/3](http://localhost:8080/api/people/3) | Delete row in DataBase by using params (id) |
| PUT | [http://localhost:8080/api/people/3](http://localhost:8080/api/people/3) | Updating row in DataBase by using params (id) and body key (lastname, firstname, birthDate, email, username, password, isAdmin, pictureDataPeople) |

### Companie's table :
| Method | Link | Description | 
|:----------:|:-------------:|:------:| 
| GET | [http://localhost:8080/api/companie/](http://localhost:8080/api/companie) | Select all information except password without using params |
| GET | [http://localhost:8080/api/companie/?username=Maxence²](http://localhost:8080/api/companie/?username=Maxence²) | Select all information except password by using params (id, email, username)|
| POST | [http://localhost:8080/api/companie/register](http://localhost:8080/api/companie/register) | Insert information to DataBase with body key (email, username, password, pictureDataCompanie) |
| POST | [http://localhost:8080/api/companie/login](http://localhost:8080/api/companie/login) | Select password information with body key (email) |
| DELETE | [http://localhost:8080/api/companie/3](http://localhost:8080/api/companie/3) | Delete row in DataBase by using params (id) |
| PUT | [http://localhost:8080/api/companie/3](http://localhost:8080/api/companie/3) | Updating row in DataBase by using params (id) and body key (email, username, password, pictureDataCompanie) |

### Advertisement's table :
| Method | Link | Description | 
|:----------:|:-------------:|:------:| 
| GET | [http://localhost:8080/api/advertisement/](http://localhost:8080/api/advertisement) | Select all information except password without using params |
| GET | [http://localhost:8080/api/advertisement/?location=Marseille&orderBy=supcreatedDate](http://localhost:8080/api/advertisement/?location=Marseille&orderBy=supcreatedDate) | Select all information except password by using params (id, title, createdDate, location, salarie, type, isActive, isRemote, orderBy(supsalarie, infsalarie, supcreatedDate, infcreatedDate))|
| POST | [http://localhost:8080/api/advertisement/](http://localhost:8080/api/advertisement/) | Insert information to DataBase with body key (location, salarie, type, isActive, isRemote, qualificationRequired, description, companieId, pictureDataAdvertisement) |
| DELETE | [http://localhost:8080/api/advertisement/3](http://localhost:8080/api/advertisement/3) | Delete row in DataBase by using params (id) |
| PUT | [http://localhost:8080/api/advertisement/3](http://localhost:8080/api/advertisement/3) | Updating row in DataBase by using params (id) and body key (location, salarie, type, isActive, isRemote, qualificationRequired, description, companieId, pictureDataAdvertisement) |

### JobApplication's table :
| Method | Link | Description | 
|:----------:|:-------------:|:------:| 
| GET | [http://localhost:8080/api/jobapplication/](http://localhost:8080/api/jobapplication) | Select all information except password without using params |
| GET | [http://localhost:8080/api/jobapplication/?companieId=2](http://localhost:8080/api/jobapplication/?companie=2) | Select all information except password by using params (jobApplicationId, companieId, companieUsername, comapnieEmail, peopleId, peopleEmail, peopleUsername, peopleLastname, peopleFirstname)|
| POST | [http://localhost:8080/api/jobapplication/](http://localhost:8080/api/jobapplication/) | Insert information to DataBase with body key (createdDate, motivationLetter, peopleId, advertisementId) |
| DELETE | [http://localhost:8080/api/jobapplication/3](http://localhost:8080/api/jobapplication/3) | Delete row in DataBase by using params (id) |
| PUT | [http://localhost:8080/api/jobapplication/3](http://localhost:8080/api/jobapplication/3) | Updating row in DataBase by using params (id) and body key (createdDate, motivationLetter, peopleId, advertisementId) |

Project with @TheMaxQuent

## Techo :
>HTML / SCSS / Bootstrap /JS / React JS / Node JS
