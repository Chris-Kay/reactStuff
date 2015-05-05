define (function() {
  return React.createClass({
      render: function () {
          return (
              React.createElement("div", null, 
                  React.createElement("h1", null, this.props.heading), 
                  React.createElement("h2", null, this.props.subHeading)
              )
          );
      }
  });
});
