### Full-Stack Machine Learning Model

The objective of this project is to build a basic machine learning model and create an API around the model that can be hosted on the Internet. 

* Use Iris dataset to build a classification model to predict the type of Iris, based on the leaf characteristics. The Iris dataset is part of the `scikit-learn` library and is where we will access the data from.

* Build one or two classification models using sklearn and turn each to optimize using **grid search**. Use **10-fold cross** validation to ensure that the model is able to generalize well. 

* "Pickle" the model file.

* Load `pkl` file and make a prediction from the saved `pkl` file. 

* Build a flask API that will take in the leaf measurements and make a prediction using the `pkl` file. 

* Once the flask API is built and working on the local machine, we will push the API onto Heroku.

* With a working API that can be called, we will then make a simple front end that will take values in from a form, pass the data to the API, retrieve the result and render the result to the page.

* The final working front end will also be pushed onto Heroku.

---

### Workplan for Front End 

* Create a bootstrap form with four (4) text boxes. These four boxes will correspond to the four leaf characteristics of the Iris sample.

* Also create a submit button on the form.

* Once data is in the form, and the submit button, the app will get the data in the form and create the proper connection string for the API:

	`/api?sepallen={}&sepalwid={}&petallen={}&petalwid={}`
	
* Once the API returns the JSON, the app will need to modify the inner HTML and parse the JSON and render the results to the screen. We will need to format the decimal values of the class probabilities for readability once rendered to the screen.

---
The Iris dataset is a famous multivariate dataset. As noted on Wikipedia:

>The data set consists of 50 samples from each of three species of Iris (Iris setosa, Iris virginica and Iris versicolor). Four features were measured from each sample: the length and the width of the sepals and petals, in centimeters. Based on the combination of these four features, [[Ronald Fisher]](https://en.wikipedia.org/wiki/Ronald_Fisher) developed a linear discriminant model to distinguish the species from each other.

![](https://upload.wikimedia.org/wikipedia/commons/5/56/Iris_dataset_scatterplot.svg)

The three Iris species that are in this dataset include: Setosa, Versicolor, Virginica.

#### Setosa 

![](https://upload.wikimedia.org/wikipedia/commons/5/56/Kosaciec_szczecinkowaty_Iris_setosa.jpg)

#### Versicolor

![](https://upload.wikimedia.org/wikipedia/commons/4/41/Iris_versicolor_3.jpg)

#### Virginica

![](https://upload.wikimedia.org/wikipedia/commons/9/9f/Iris_virginica.jpg)

As you can see, each of these species are shaped differently, and this shape is distinctive enough that each species will have its own distribution of leaf measurements that are unique to that species.  It is this diffrence that allows us to take a set of measurements and use a machine learning model to predict the species of Iris.
