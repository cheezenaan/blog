import { findIconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Container,
  Content,
  Footer as BloomerFooter,
  Level,
  LevelItem,
  LevelLeft,
} from 'bloomer';
import * as React from 'react';

import { Hoverable } from '../providers/hoverable';

export const Footer: React.FC = () => (
  <BloomerFooter id="footer">
    <Container>
      <Content isSize="small">
        <p>
          This site is generated by{' '}
          <a
            href="https://www.gatsbyjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gatsby
          </a>
          , a blazing fast modern site generator for React.
        </p>
        <p>© 2019. cheezenaan</p>
      </Content>
      <Level isMobile>
        <LevelLeft>
          <LevelItem>
            {/* TODO: SocialAccountIconLink みたいな名前で括りだす */}
            <Hoverable
              render={({ isHovered, toggleHovered }) => (
                <a
                  href="https://twitter.com/cheezenaan"
                  target="_blank"
                  rel="noopener noreferrer"
                  /* TODO: classname の切り替えに classNames を使いたい */
                  className={isHovered ? 'has-text-link' : 'has-text-dark'}
                  onMouseEnter={toggleHovered}
                  onMouseLeave={toggleHovered}
                >
                  <FontAwesomeIcon
                    icon={findIconDefinition({
                      prefix: 'fab',
                      iconName: 'twitter',
                    })}
                  />
                </a>
              )}
            />
          </LevelItem>
          <LevelItem>
            <Hoverable
              render={({ isHovered, toggleHovered }) => (
                <a
                  href="https://github.com/cheezenaan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={isHovered ? 'has-text-link' : 'has-text-dark'}
                  onMouseEnter={toggleHovered}
                  onMouseLeave={toggleHovered}
                >
                  <FontAwesomeIcon
                    icon={findIconDefinition({
                      prefix: 'fab',
                      iconName: 'github',
                    })}
                  />
                </a>
              )}
            />
          </LevelItem>
        </LevelLeft>
      </Level>
    </Container>
  </BloomerFooter>
);
