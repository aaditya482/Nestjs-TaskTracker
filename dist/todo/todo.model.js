"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoSchema = void 0;
const mongoose = require("mongoose");
exports.todoSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    name: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        required: true,
    },
});
//# sourceMappingURL=todo.model.js.map