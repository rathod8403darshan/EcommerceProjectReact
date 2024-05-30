import React from 'react'
import Dashboard from './Dashboard ';

function Home() {
  return (
    <>
      <section id="content">
        <div class="content">
          <div class="content-header">
            <h1>Dashboard</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div class="widget-box sample-widget">
            <div class="widget-header">
              <h2>Widget Header</h2>
              <i class="fa fa-cog"></i>
            </div>
            <div class="widget-content">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/87118/sample-data-1.png" />
            </div>
          </div>
          <div class="widget-box sample-widget">
            <div class="widget-header">
              <h2>Widget Header</h2>
              <i class="fa fa-cog"></i>
            </div>
            <div class="widget-content">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/87118/sample-data-1.png" />
            </div>
          </div>
          <div class="widget-box sample-widget">
            <div class="widget-header">
              <h2>Widget Header</h2>
              <i class="fa fa-cog"></i>
            </div>
            <div class="widget-content">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/87118/sample-data-1.png" />
            </div>
          </div>
          <div class="widget-box sample-widget">
            <div class="widget-header">
              <h2>Widget Header</h2>
              <i class="fa fa-cog"></i>
            </div>
            <div class="widget-content">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/87118/sample-data-1.png" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Dashboard(Home)