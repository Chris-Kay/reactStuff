define (function() {
  return React.createClass({
      render: function () {
          return (
              <div>
                  <h2>{this.props.heading}</h2>
                  <h3>{this.props.subHeading}</h3>
              </div>
          );
      }
  });
});
