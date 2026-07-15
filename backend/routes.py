from flask import Blueprint, jsonify
import pandas as pd
import json

api = Blueprint("api", __name__)

# Load datasets
prices = pd.read_csv("data/BrentOilPrices.csv")
prices["Date"] = pd.to_datetime(prices["Date"])

events = pd.read_csv("data/geopolitical_events.csv")
events["Date"] = pd.to_datetime(events["Date"])

with open("data/change_point_results.json", "r") as file:
    change_point = json.load(file)


@api.route("/prices", methods=["GET"])
def get_prices():
    return jsonify(prices.to_dict(orient="records"))


@api.route("/events", methods=["GET"])
def get_events():
    return jsonify(events.to_dict(orient="records"))


@api.route("/change-point", methods=["GET"])
def get_change_point():
    return jsonify(change_point)