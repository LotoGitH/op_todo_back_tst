"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrismaClientClass = getPrismaClientClass;
const runtime = __importStar(require("@prisma/client/runtime/client"));
const config = {
    "previewFeatures": [],
    "clientVersion": "7.6.0",
    "engineVersion": "75cbdc1eb7150937890ad5465d861175c6624711",
    "activeProvider": "postgresql",
    "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Get a free hosted Postgres database in seconds: `npx create-db`\n\ngenerator client {\n  provider = \"prisma-client\"\n  output   = \"../generated/prisma\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n}\n\n/// Tabla principal de tareas\nmodel ToDo {\n  id Int @id @default(autoincrement())\n\n  // Información de la tarea\n  title            String\n  description      String?\n  targetDate       DateTime?\n  assignedUserName String?\n\n  // Metadata\n  createdAt DateTime  @default(now())\n  updatedAt DateTime  @default(now()) @updatedAt\n  deletedAt DateTime?\n  status    String    @default(\"active\")\n}\n",
    "runtimeDataModel": {
        "models": {},
        "enums": {},
        "types": {}
    },
    "parameterizationSchema": {
        "strings": [],
        "graph": ""
    }
};
config.runtimeDataModel = JSON.parse("{\"models\":{\"ToDo\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"title\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"targetDate\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"assignedUserName\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"deletedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"status\",\"kind\":\"scalar\",\"type\":\"String\"}],\"dbName\":null}},\"enums\":{},\"types\":{}}");
config.parameterizationSchema = {
    strings: JSON.parse("[\"where\",\"ToDo.findUnique\",\"ToDo.findUniqueOrThrow\",\"orderBy\",\"cursor\",\"ToDo.findFirst\",\"ToDo.findFirstOrThrow\",\"ToDo.findMany\",\"data\",\"ToDo.createOne\",\"ToDo.createMany\",\"ToDo.createManyAndReturn\",\"ToDo.updateOne\",\"ToDo.updateMany\",\"ToDo.updateManyAndReturn\",\"create\",\"update\",\"ToDo.upsertOne\",\"ToDo.deleteOne\",\"ToDo.deleteMany\",\"having\",\"_count\",\"_avg\",\"_sum\",\"_min\",\"_max\",\"ToDo.groupBy\",\"ToDo.aggregate\",\"AND\",\"OR\",\"NOT\",\"id\",\"title\",\"description\",\"targetDate\",\"assignedUserName\",\"createdAt\",\"updatedAt\",\"deletedAt\",\"status\",\"equals\",\"in\",\"notIn\",\"lt\",\"lte\",\"gt\",\"gte\",\"not\",\"contains\",\"startsWith\",\"endsWith\",\"set\",\"increment\",\"decrement\",\"multiply\",\"divide\"]"),
    graph: "PAsQDBwAACwAMB0AAAQAEB4AACwAMB8CAAAAASABAC4AISEBAC8AISJAADAAISMBAC8AISRAADEAISVAADEAISZAADAAIScBAC4AIQEAAAABACABAAAAAQAgDBwAACwAMB0AAAQAEB4AACwAMB8CAC0AISABAC4AISEBAC8AISJAADAAISMBAC8AISRAADEAISVAADEAISZAADAAIScBAC4AIQQhAAAyACAiAAAyACAjAAAyACAmAAAyACADAAAABAAgAwAABQAwBAAAAQAgAwAAAAQAIAMAAAUAMAQAAAEAIAMAAAAEACADAAAFADAEAAABACAJHwIAAAABIAEAAAABIQEAAAABIkAAAAABIwEAAAABJEAAAAABJUAAAAABJkAAAAABJwEAAAABAQgAAAkAIAkfAgAAAAEgAQAAAAEhAQAAAAEiQAAAAAEjAQAAAAEkQAAAAAElQAAAAAEmQAAAAAEnAQAAAAEBCAAACwAwAQgAAAsAMAkfAgA8ACEgAQA4ACEhAQA5ACEiQAA6ACEjAQA5ACEkQAA7ACElQAA7ACEmQAA6ACEnAQA4ACECAAAAAQAgCAAADgAgCR8CADwAISABADgAISEBADkAISJAADoAISMBADkAISRAADsAISVAADsAISZAADoAIScBADgAIQIAAAAEACAIAAAQACACAAAABAAgCAAAEAAgAwAAAAEAIA8AAAkAIBAAAA4AIAEAAAABACABAAAABAAgCRUAADMAIBYAADQAIBcAADcAIBgAADYAIBkAADUAICEAADIAICIAADIAICMAADIAICYAADIAIAwcAAAaADAdAAAXABAeAAAaADAfAgAbACEgAQAcACEhAQAdACEiQAAeACEjAQAdACEkQAAfACElQAAfACEmQAAeACEnAQAcACEDAAAABAAgAwAAFgAwFAAAFwAgAwAAAAQAIAMAAAUAMAQAAAEAIAwcAAAaADAdAAAXABAeAAAaADAfAgAbACEgAQAcACEhAQAdACEiQAAeACEjAQAdACEkQAAfACElQAAfACEmQAAeACEnAQAcACENFQAAIQAgFgAAKwAgFwAAIQAgGAAAIQAgGQAAIQAgKAIAAAABKQIAAAAEKgIAAAAEKwIAAAABLAIAAAABLQIAAAABLgIAAAABLwIAKgAhDhUAACEAIBgAACkAIBkAACkAICgBAAAA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"
};
async function decodeBase64AsWasm(wasmBase64) {
    const { Buffer } = await import('node:buffer');
    const wasmArray = Buffer.from(wasmBase64, 'base64');
    return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
    getRuntime: async () => await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.mjs"),
    getQueryCompilerWasmModule: async () => {
        const { wasm } = await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.wasm-base64.mjs");
        return await decodeBase64AsWasm(wasm);
    },
    importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
    return runtime.getPrismaClient(config);
}
//# sourceMappingURL=class.js.map