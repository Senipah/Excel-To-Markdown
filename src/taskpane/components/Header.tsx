import * as React from "react";

export interface HeaderProps {
  title: string;
  message: string;
}

export default class Header extends React.Component<HeaderProps> {
  render() {
    const { title, message } = this.props;

    return (
      <section>
        <h1>{title}</h1>
        <h2>{message}</h2>
      </section>
    );
  }
}
