import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

export const characters: { characters?: mongoDB.Collection; } = {};
export const combos: { combos?: mongoDB.Collection; } = {};
