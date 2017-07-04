import {async, ComponentFixture} from "@angular/core/testing";
import {TestUtils} from "../../test";
import {SignupPage} from "./signup-page";

let fixture: ComponentFixture<SignupPage> = null;
let instance: any = null;

describe("Pages: SignupPage", () => {

  beforeEach(async(() => TestUtils.beforeEachCompiler([SignupPage]).then(compiled => {
    fixture = compiled.fixture;
    instance = compiled.instance;
  })));

  it("should create the Signup Page", async(() => {
    expect(instance).toBeTruthy();
  }));
});
