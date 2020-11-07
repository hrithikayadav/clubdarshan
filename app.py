from flask import Flask, jsonify, request, render_template
import pickle
import numpy as np

app = Flask(__name__)


@app.route('/is_alive')
def api_alive():
    return 'I am alive!'


@app.route('/')
def main_page():
    return render_template('index.html')


def class2string(x):
    if x == np.array([0]):
        return 'TECH'
    elif x == np.array([1]):
        return 'CREATIVE'
    elif x == np.array([2]):
        return 'CORPORATE'
    else:
        raise Exception('Based on the input values provided, unable to predict t {}'.format(x))


# TEST CASE CLASS 0: /prediction?sepallen=5.1&sepalwid=3.5&petallen=1.4&petalwid=5
# TEST CASE CLASS 2: /prediction?sepallen=5.1&sepalwid=3.5&petallen=1.4&petalwid=0.2

@app.route('/api', methods=['GET'])
def get_prediction():

    sepal_length = request.args.get('sepallen')
    sepal_width = request.args.get('sepalwid')
    petal_length = request.args.get('petallen')
    petal_width = request.args.get('petalwid')

    input_list = [float(sepal_length),
                  float(sepal_width),
                  float(petal_length),
                  float(petal_width)]

    input_array = np.array(input_list).reshape(1, -1)

    with open('pickle_model.pkl', 'rb') as f:
        pkl_lr = pickle.load(f)

    y_pred_class = pkl_lr.predict(input_array)
    y_pred_prob = pkl_lr.predict_proba(input_array)

    y_pred_class_dict = dict(zip(['iris_class_name'],
                                 [class2string(y_pred_class)]))

    y_pred_class_prob_dict = dict(zip(['iris_class_setosa_prob',
                                       'iris_class_virginica_prob',
                                       'iris_class_versicolor_prob'], y_pred_prob[0].tolist()))

    # Dict unpacking.
    # Only works on Python 3.5 and greater
    # https://www.python.org/dev/peps/pep-0448/
    return jsonify({**y_pred_class_dict, **y_pred_class_prob_dict})


if __name__ == '__main__':
    app.run(debug=True)
