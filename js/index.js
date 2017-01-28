/**
 * Created by Brandon on 2017-01-28.
 */

projects = ['current', 'accelskies', 'magichotel', 'overlord', 'rainbow', 'vanquest'];
projectNums = [0, 1, 2, 3, 4, 5];
projectImages = [12, 11, 8, 11, 10, 9];
imageSources = [];

for (count = 0; count < projects.length; count++) {
    sourceList = [];
    for (imageNum = 1; imageNum <= projectImages[count]; imageNum++) {
        source = "images/games/" + projects[count] + "/screen" + imageNum + ".png";
        sourceList.push(source);
    }
    imageSources.push(sourceList);
}

function srcListToThumbnails(srcList) {
    console.log(srcList);
    return srcList.map(projSrc => React.createElement(
        'ul',
        null,
        React.createElement('img', { 'data-src': 'holder.js/200x200', className: 'img-thumbnail', alt: '200x200', src: projSrc, 'data-holder-rendered': 'true', style: { float: "left", height: "200px" } })
    ));
}
const listProjects = projectNums.map(projNum => React.createElement(
    'div',
    { className: 'col-md-12' },
    ' ',
    projects[projNum],
    React.createElement(
        'ul',
        null,
        srcListToThumbnails(imageSources[projNum])
    )
));

class ShoppingList extends React.Component {
    render() {
        return React.createElement(
            'div',
            { className: 'shopping-list' },
            React.createElement(
                'h1',
                null,
                'Shopping List for ',
                this.props.name
            ),
            React.createElement(
                'ul',
                null,
                React.createElement(
                    'ul',
                    null,
                    listProjects
                )
            )
        );
    }
}

ReactDOM.render(React.createElement(ShoppingList), document.getElementById('shopping'));