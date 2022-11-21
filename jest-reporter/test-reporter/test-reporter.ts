import { Reporter, TestContext } from "@jest/reporters";
import { AggregatedResult, AssertionResult } from "@jest/test-result";
import { Config } from "@jest/types";

export default class CustomReporter implements Pick<Reporter, "onRunComplete"> {
  constructor(
    private config: Config.InitialOptions,
    private options: any,
    private context: TestContext
  ) {}

  onRunComplete(_: Set<TestContext>, results: AggregatedResult) {
    console.log({ _ });
    console.log("Custom reporter output:");
    console.log("global config: ", this.config);
  }
}
