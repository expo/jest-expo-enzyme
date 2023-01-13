"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("jest-enzyme");
const enzyme_adapter_react_17_1 = __importDefault(require("@wojtekmaj/enzyme-adapter-react-17"));
const enzyme_1 = __importDefault(require("enzyme"));
const serializer_1 = __importDefault(require("./serializer"));
enzyme_1.default.configure({ adapter: new enzyme_adapter_react_17_1.default() });
// @ts-ignore: test types are not available in src/
expect.addSnapshotSerializer(serializer_1.default);
//# sourceMappingURL=setupEnzyme.web.js.map