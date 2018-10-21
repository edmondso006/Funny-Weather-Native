import React, {Component} from 'react';
import { View, Text } from 'react-native';
import PrimaryImage from './../components/primaryImage';

type Props = {};
export default class PrimaryImageContainer extends Component<Props> {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <View>
                <PrimaryImage />
            </View>


        );
    }
}
