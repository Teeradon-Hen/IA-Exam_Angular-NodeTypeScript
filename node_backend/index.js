"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const port = 4000;
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
app.post('/area', (req, res) => {
    let area = req.body.base * req.body.height / 2;
    if (area < 0) {
        let area = "Invalid Input";
        res.send({ area });
    }
    else
        //res.sendStatus(400)
        res.send({ area });
});
app.post('/citizenId', (req, res) => {
    var id = String(req.body.citizenId);
    const pattern = /^[0-9]+$/;
    var success, error_code, error_msg;
    if (pattern.test(id)) {
        if (id.length != 13) {
            success = false;
            error_code = "001";
            error_msg = "cititzen_id invalid";
        }
        else {
            var lastDigit = Number.parseInt(id.charAt(id.length - 1));
            var sum = 0;
            for (var i = 0; i < id.length - 1; i++)
                sum += Number.parseInt(id.charAt(i)) * (13 - i);
            var checkDigit = 11 - sum % 11;
            checkDigit = checkDigit % 10;
            if (checkDigit == lastDigit) {
                success = true;
                error_code = "200";
                error_msg = "";
            }
            else {
                success = false;
                error_code = "001";
                error_msg = "cititzen_id invalid";
            }
        }
    }
    else {
        if (id.length == 0) {
            success = false;
            error_code = "001";
            error_msg = "cititzen_id require";
        }
        else {
            success = false;
            error_code = "001";
            error_msg = "cititzen_id invalid";
        }
    }
    res.send({ success, error_code, error_msg });
});
app.listen(port, function () {
    console.log(`Connecting on Port ${port}`);
});
