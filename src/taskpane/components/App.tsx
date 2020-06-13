import * as React from "react";
import Header from "./Header";
import Progress from "./Progress";
import { Flex, Segment } from "@fluentui/react-northstar";

export interface AppProps {
  title: string;
  isOfficeInitialized: boolean;
}

export default class App extends React.Component<AppProps> {
  constructor(props, context) {
    super(props, context);
  }

  click = async () => {
    try {
      await Excel.run(async context => {
        /**
         * Insert your Excel code here
         */
        const range = context.workbook.getSelectedRange();

        // Read the range address
        range.load("address");

        // Update the fill color
        range.format.fill.color = "yellow";

        await context.sync();
        console.log(`The range address was ${range.address}.`);
      });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { title, isOfficeInitialized } = this.props;

    if (!isOfficeInitialized) {
      return;
      <Flex>
        <Progress title={title} message="Please sideload your addin to see app body." />;
      </Flex>;
    }

    return (
      <Flex>
        <Header title={this.props.title} message="Welcome" />
      </Flex>
    );
  }
}
