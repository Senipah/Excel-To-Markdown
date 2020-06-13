import { Loader } from "@fluentui/react-northstar";
import * as React from "react";

export interface ProgressProps {
  message: string;
  title: string;
}

export default class Progress extends React.Component<ProgressProps> {
  render() {
    const { message, title } = this.props;

    return (
      <section>
        <h1>{title}</h1>
        <Loader label={message} />
      </section>
    );
  }
}
