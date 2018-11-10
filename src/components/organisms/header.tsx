import { Title } from 'bloomer';
import { Link } from 'gatsby';
import * as React from 'react';

interface Props {
  siteTitle: string;
}

export const Header: React.SFC<> = ({ siteTitle }) => (
  <Title>
    <Link to="/">{siteTitle}</Link>
    aaaaaaaaa
  </Title>
);

const sound = 'euphonium';
console.log({ sound });
