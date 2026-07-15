from flask import Blueprint, jsonify
import pandas as pd

api = Blueprint("api", __name__)

prices = pd.read_csv("data/BrentOilPrices.csv")

prices["Date"] = pd.to_datetime(prices["Date"])

@api.route("/prices", methods=["GET"])
def get_prices():
    return jsonify(prices.to_dict(orient="records"))