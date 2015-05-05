define (function() {
  return React.createClass({
      render: function () {
          return (
              <div>
                  <h1>{this.props.heading}</h1>
                  <h2>{this.props.subHeading}</h2>
              </div>
          );
      }
  });
});
