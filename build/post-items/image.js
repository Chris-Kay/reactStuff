define(function () {
  return React.createClass({
      render: function () {
          return (
              React.createElement("div", {className: "centered-image"}, 
                  React.createElement("img", {src: this.props.image, width: "400px"})
              )
          )
      }
  });
});
