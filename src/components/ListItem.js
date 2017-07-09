import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
// include action creators
import * as actions from '../actions';

class ListItem extends Component {
  // componentWillUpdate fires whenever the component is about to re-render
  componentWillUpdate() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
  }

  renderDescription() {
    const { library, expanded } = this.props;

    if (expanded) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>
            {library.description}
          </Text>
        </CardSection>
      );
    }
  }

  render () {
    const { titleStyle } = styles;
    const { id, title } = this.props.library;

    return (
      <TouchableWithoutFeedback
          onPress={() => this.props.selectLibrary(id)}
        >
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
}

// ownProps gives access to component props ie this.props.blah
const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;

  return { expanded };
};

// without mapStateToProps need to pass in null as first argument
// second argument of actions makes the action creator automatically dispatch the action to the redux store
// the connect argument of actions ensure that actions are also passed as props along with the ListItem component
export default connect(mapStateToProps, actions)(ListItem);
