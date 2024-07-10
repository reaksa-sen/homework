"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp(target, key, result);
  return result;
};
var __decorateParam = (index, decorator) => (target, key) => decorator(target, key, index);

// src/app.ts
var import_express = __toESM(require("express"));
var import_swagger_ui_express = __toESM(require("swagger-ui-express"));

// src/routes/v1/routes.ts
var import_runtime2 = require("@tsoa/runtime");

// src/controllers/user.controller.ts
var import_tsoa = require("tsoa");

// src/models/user.model.ts
var import_mongoose = require("mongoose");
var UserSchema = new import_mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  gender: { type: String, required: true }
});
var User = (0, import_mongoose.model)("User", UserSchema);

// src/utils/errorHandler.ts
var ApiError = class extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
};
var NotFoundError = class extends ApiError {
  constructor(message = "Not Found") {
    super(404, message);
  }
};

// src/repositories/user.repository.ts
var UserRepository = class {
  async getUser(useId) {
    try {
      const user = await User.findById(useId).exec();
      if (!user) {
        throw new NotFoundError("User not found");
      }
      return user;
    } catch (error) {
      throw error;
    }
  }
  async createUser(data) {
    const nweUser = new User(data);
    return nweUser.save();
  }
  async getUsers(page, limit) {
    if (page && limit) {
      const skip = (page - 1) * limit;
      return User.find().skip(skip).limit(limit).exec();
    } else {
      return User.find().exec();
    }
  }
  async updateUser(UserId, data) {
    return User.findByIdAndUpdate(UserId, data, { new: true }).exec();
  }
  async deleteUser(userId) {
    await User.findByIdAndDelete(userId);
  }
};
var user_repository_default = new UserRepository();

// src/services/user.service.ts
var UserService = class {
  //   private userRepository: UserRepository = new UserRepository();
  // constructor(){
  //     this.userRepository = new UserRepository;
  // }
  async getUser(useId) {
    try {
      const user = await user_repository_default.getUser(useId);
      return user;
    } catch {
      throw new NotFoundError("User Not Found!");
    }
  }
  async createUser(data) {
    return user_repository_default.createUser(data);
  }
  async getUsers(page, limit) {
    return user_repository_default.getUsers(page, limit);
  }
  async updateUser(userId, data) {
    return user_repository_default.updateUser(userId, data);
  }
  async deleteUser(userId) {
    await user_repository_default.deleteUser(userId);
  }
};
var user_service_default = new UserService();

// src/middleware/logger.middleware.ts
var loggerMiddleware = (req, _res, next) => {
  const method = req.method;
  const url = req.url;
  const time = (/* @__PURE__ */ new Date()).toISOString();
  console.log(`[${time}] ${method} request to ${url}`);
  next();
};
var logger_middleware_default = loggerMiddleware;

// src/controllers/user.controller.ts
var UserController = class extends import_tsoa.Controller {
  async getUser(userId) {
    return user_service_default.getUser(userId);
  }
  async createUser(user) {
    return user_service_default.createUser(user);
  }
  async getUsers(page, limit) {
    let getLimit = limit || 10;
    let getPage = page || 1;
    return user_service_default.getUsers(getPage, getLimit);
  }
  async updateUser(userId, body) {
    return user_service_default.updateUser(userId, body);
  }
  async deleteUser(userId) {
    await user_service_default.deleteUser(userId);
    return { message: "user deleted :)" };
  }
};
__decorateClass([
  (0, import_tsoa.Get)("{userId}"),
  __decorateParam(0, (0, import_tsoa.Path)())
], UserController.prototype, "getUser", 1);
__decorateClass([
  (0, import_tsoa.Post)("/"),
  (0, import_tsoa.SuccessResponse)("201", "created"),
  __decorateParam(0, (0, import_tsoa.Body)())
], UserController.prototype, "createUser", 1);
__decorateClass([
  (0, import_tsoa.Get)("/"),
  (0, import_tsoa.Middlewares)(logger_middleware_default),
  __decorateParam(0, (0, import_tsoa.Query)()),
  __decorateParam(1, (0, import_tsoa.Query)())
], UserController.prototype, "getUsers", 1);
__decorateClass([
  (0, import_tsoa.Put)("{userId}"),
  __decorateParam(0, (0, import_tsoa.Path)()),
  __decorateParam(1, (0, import_tsoa.Body)())
], UserController.prototype, "updateUser", 1);
__decorateClass([
  (0, import_tsoa.Delete)("{userId}"),
  (0, import_tsoa.SuccessResponse)("204", "delete successful!"),
  __decorateParam(0, (0, import_tsoa.Path)())
], UserController.prototype, "deleteUser", 1);
UserController = __decorateClass([
  (0, import_tsoa.Route)("/v1/users")
], UserController);

// src/routes/v1/routes.ts
var models = {
  "IUser": {
    "dataType": "refObject",
    "properties": {
      "name": { "dataType": "string", "required": true },
      "email": { "dataType": "string", "required": true },
      "gender": { "dataType": "string", "required": true }
    },
    "additionalProperties": false
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "Partial_IUser_": {
    "dataType": "refAlias",
    "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "name": { "dataType": "string" }, "email": { "dataType": "string" }, "gender": { "dataType": "string" } }, "validators": {} }
  }
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
var templateService = new import_runtime2.ExpressTemplateService(models, { "noImplicitAdditionalProperties": "throw-on-extras", "bodyCoercion": true });
function RegisterRoutes(app2) {
  app2.get(
    "/v1/users/:userId",
    ...(0, import_runtime2.fetchMiddlewares)(UserController),
    ...(0, import_runtime2.fetchMiddlewares)(UserController.prototype.getUser),
    async function UserController_getUser(request, response, next) {
      const args = {
        userId: { "in": "path", "name": "userId", "required": true, "dataType": "string" }
      };
      let validatedArgs = [];
      try {
        validatedArgs = templateService.getValidatedArgs({ args, request, response });
        const controller = new UserController();
        await templateService.apiHandler({
          methodName: "getUser",
          controller,
          response,
          next,
          validatedArgs,
          successStatus: void 0
        });
      } catch (err) {
        return next(err);
      }
    }
  );
  app2.post(
    "/v1/users",
    ...(0, import_runtime2.fetchMiddlewares)(UserController),
    ...(0, import_runtime2.fetchMiddlewares)(UserController.prototype.createUser),
    async function UserController_createUser(request, response, next) {
      const args = {
        user: { "in": "body", "name": "user", "required": true, "ref": "IUser" }
      };
      let validatedArgs = [];
      try {
        validatedArgs = templateService.getValidatedArgs({ args, request, response });
        const controller = new UserController();
        await templateService.apiHandler({
          methodName: "createUser",
          controller,
          response,
          next,
          validatedArgs,
          successStatus: 201
        });
      } catch (err) {
        return next(err);
      }
    }
  );
  app2.get(
    "/v1/users",
    ...(0, import_runtime2.fetchMiddlewares)(UserController),
    ...(0, import_runtime2.fetchMiddlewares)(UserController.prototype.getUsers),
    async function UserController_getUsers(request, response, next) {
      const args = {
        page: { "in": "query", "name": "page", "dataType": "double" },
        limit: { "in": "query", "name": "limit", "dataType": "double" }
      };
      let validatedArgs = [];
      try {
        validatedArgs = templateService.getValidatedArgs({ args, request, response });
        const controller = new UserController();
        await templateService.apiHandler({
          methodName: "getUsers",
          controller,
          response,
          next,
          validatedArgs,
          successStatus: void 0
        });
      } catch (err) {
        return next(err);
      }
    }
  );
  app2.put(
    "/v1/users/:userId",
    ...(0, import_runtime2.fetchMiddlewares)(UserController),
    ...(0, import_runtime2.fetchMiddlewares)(UserController.prototype.updateUser),
    async function UserController_updateUser(request, response, next) {
      const args = {
        userId: { "in": "path", "name": "userId", "required": true, "dataType": "string" },
        body: { "in": "body", "name": "body", "required": true, "ref": "Partial_IUser_" }
      };
      let validatedArgs = [];
      try {
        validatedArgs = templateService.getValidatedArgs({ args, request, response });
        const controller = new UserController();
        await templateService.apiHandler({
          methodName: "updateUser",
          controller,
          response,
          next,
          validatedArgs,
          successStatus: void 0
        });
      } catch (err) {
        return next(err);
      }
    }
  );
  app2.delete(
    "/v1/users/:userId",
    ...(0, import_runtime2.fetchMiddlewares)(UserController),
    ...(0, import_runtime2.fetchMiddlewares)(UserController.prototype.deleteUser),
    async function UserController_deleteUser(request, response, next) {
      const args = {
        userId: { "in": "path", "name": "userId", "required": true, "dataType": "string" }
      };
      let validatedArgs = [];
      try {
        validatedArgs = templateService.getValidatedArgs({ args, request, response });
        const controller = new UserController();
        await templateService.apiHandler({
          methodName: "deleteUser",
          controller,
          response,
          next,
          validatedArgs,
          successStatus: 204
        });
      } catch (err) {
        return next(err);
      }
    }
  );
}

// src/app.ts
var import_fs = __toESM(require("fs"));
var import_path = __toESM(require("path"));
var swaggerDocument = JSON.parse(
  import_fs.default.readFileSync(import_path.default.join(__dirname, "docs/swagger.json"), "utf8")
);
var app = (0, import_express.default)();
app.use(import_express.default.json());
app.use(logger_middleware_default);
RegisterRoutes(app);
app.use("/docs", import_swagger_ui_express.default.serve, import_swagger_ui_express.default.setup(swaggerDocument));
var app_default = app;

// src/utils/config.ts
var import_dotenv = __toESM(require("dotenv"));
var import_path2 = __toESM(require("path"));
var yup = __toESM(require("yup"));
function loadConfig() {
  const env = "production";
  const envPath = import_path2.default.resolve(__dirname, `../configs/.env.${env}`);
  import_dotenv.default.config({ path: envPath });
  const envVarsSchema = yup.object().shape({
    NODE_ENV: yup.string().oneOf(["development", "production", "test"]).default("development"),
    PORT: yup.number().default(3e3),
    MONGODB_URL: yup.string().required()
  }).required();
  let envVars;
  try {
    envVars = envVarsSchema.validateSync(process.env, { stripUnknown: true });
  } catch (error) {
    throw new Error(`Config validation error: ${error}`);
  }
  return {
    env: envVars.NODE_ENV,
    port: envVars.PORT,
    mongodbUrl: envVars.MONGODB_URL
  };
}
var configs = loadConfig();
var config_default = configs;

// src/database/connection.ts
var import_mongoose2 = __toESM(require("mongoose"));
var uri = config_default.mongodbUrl;
var ConnectDB = async () => {
  try {
    if (!uri) {
      throw new Error("MongoDB it not define in .env!");
    }
    await import_mongoose2.default.connect(uri);
    console.log("Database is connected!");
  } catch (err) {
    console.error("Database it fail to connected!");
    process.exit(1);
  }
};

// src/server.ts
function run() {
  ConnectDB();
  app_default.listen(config_default.port, () => {
    console.log(`User Service running on Port: ${config_default.port}`);
  });
}
run();
