import { Reporter, TestContext } from "@jest/reporters";
import { AggregatedResult } from "@jest/test-result";
import { Config } from "@jest/types";

type CustomReporter = Pick<Reporter, "onRunComplete">;

interface Options {
  useReporter: boolean;
}

export default class TestReporter implements CustomReporter {
  constructor(
    private config: Config.InitialOptions,
    private options: Options
  ) {}

  onRunComplete(context: Set<TestContext>, results: AggregatedResult) {
    const isCi = this.config.ci;
    const useReporter = this.options.useReporter;

    if (isCi || useReporter) {
      console.log(results);
    }
  }
}
