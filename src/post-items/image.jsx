define(function () {
  return React.createClass({
      render: function () {
          return (
              <div className='centered-image'>
                  <img src={this.props.image.figure} width='400px' />
              </div>
          )
      }
  });
});
