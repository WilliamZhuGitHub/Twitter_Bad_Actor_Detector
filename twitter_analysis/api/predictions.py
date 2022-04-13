import pandas as pd
import json
from joblib import load
import requests
import cloudpickle
from sklearn.feature_extraction.text import TfidfVectorizer
import keras
from keras.preprocessing import sequence

def get_ngram(tweets):
    t = pd.json_normalize(tweets, record_path='data')
    mfile = requests.get("https://github.com/WilliamZhuGitHub/Twitter_Bad_Actor_Detector/blob/main/twitter_analysis/twitter_analysis/models/ngram.joblib")
    model = load(mfile.content)
    vect = cloudpickle.load("https://github.com/WilliamZhuGitHub/Twitter_Bad_Actor_Detector/blob/main/twitter_analysis/twitter_analysis/models/tf.pk")
    tally = 0
    for tweet in t['text']:
        temp = vect.transform(x)
        if model.predict(temp) == 'bad_actor':
            tally += 1
    return tally / t.shape[0]
    

def get_sentiment(tweets):
    t = pd.json_normalize(tweets, record_path='data')
    model = keras.models.load_model(requests.get("https://github.com/WilliamZhuGitHub/Twitter_Bad_Actor_Detector/blob/main/twitter_analysis/twitter_analysis/models/sentiment.keras", allow_redirects=True))
    token = cloudpickle.load("https://github.com/WilliamZhuGitHub/Twitter_Bad_Actor_Detector/blob/main/twitter_analysis/twitter_analysis/models/token.pk")
    tally = 0
    for tweet in t['text']:
        temp = sequence.pad_sequences(token.texts_to_sequences(tweet), maxlen=50)
        tally += model.predict(temp)
    return tally / t.shape[0]

def metadata(user_blob, tweets):
    score = 0
    geo = set(tweets.geo)
    if len(geo) >= 2:
        score += 0.2
    if ~geo.contains(user_blob.location):
        score += 0.2
    score += len(tweets)*0.1
    return score if score < 1 else 1
