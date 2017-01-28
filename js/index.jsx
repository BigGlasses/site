/**
 * Created by Brandon on 2017-01-28.
 */

projects = ['current', 'accelskies', 'magichotel', 'overlord', 'rainbow', 'vanquest']
projectNums = [0,1,2,3,4,5]
projectImages = [12,11,8,11,10,9]
imageSources = []

for(count = 0; count < projects.length; count++){
    sourceList = []
    for(imageNum = 1; imageNum <= projectImages[count]; imageNum++) {
        source = "images/games/" + projects[count] + "/screen" + imageNum + ".png"
        sourceList.push(source)
    }
    imageSources.push(sourceList)
}

function srcListToThumbnails(srcList) {
    console.log(srcList)
    return (srcList.map((projSrc) =>
    <ul><img data-src="holder.js/200x200" className="img-thumbnail" alt="200x200" src={projSrc} data-holder-rendered="true" style={{float:"left",    height: "200px"}}></img></ul>))
}
const listProjects = projectNums.map((projNum) =>
    <div className="col-md-12"> {projects[projNum]}
        <ul>{srcListToThumbnails(imageSources[projNum])}</ul>
    </div>
)


class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
            <ul>{listProjects}</ul>
        </ul>
      </div>
    );
  }
}

ReactDOM.render(
  React.createElement(ShoppingList),
  document.getElementById('shopping')
);
