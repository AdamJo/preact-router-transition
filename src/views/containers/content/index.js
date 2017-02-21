import { h, Component } from 'preact';
import Header from '../header';
import Footer from '../footer';

import style from './style';

import CSSTransitionGroup from 'preact-css-transition-group';

export default class Content extends Component {
  render() {
    return (
      <div className={style.app}>
        <Header />
        <main className={style.content}>
          <div className={style.wrapper}>
            <CSSTransitionGroup
              transitionName={{
                enter: style.enter,
                enterActive: style.enterActive,
                leave: style.leave,
                leaveActive: style.leaveActive
              }}
            >
            {this.props.children}
						</CSSTransitionGroup>
						---
            <CSSTransitionGroup
              transitionName='example'
            >
            	{this.props.children}
						</CSSTransitionGroup>
          </div>
        </main>
        {/*<Footer />*/}
      </div>
    );
  }
}
