define(function () {
  return React.createClass({
      render: function () {
          return (
              <div className='centered-image'>
                  <img src={this.props.image} width='400px' />
              </div>
          )
      }
  });
});
