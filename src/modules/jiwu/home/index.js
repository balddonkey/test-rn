import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Echarts from "native-echarts";

export default class Home extends Component {
  static navigationOptions = function(d) {
    return {
      title: "Welcome",
      headerStyle: {
        backgroundColor: "#f4511e"
      },
      headerTintColor: "#fff",
      headerTitle: "Home"
    };
	};

	constructor(props) {
		super(props);
		this.state = {
			title: 'Hehe',
		}
	}
	
	onPush() {
		this.props.navigation.navigate('Test', {
			msg: 'push'
		});
	};

  render() {
    const option = {
      title: {
        text: "ECharts demo"
      },
      tooltip: {},
      legend: {
        data: ["销量"]
      },
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
		};
		let t = this;
    return (
      <View style={styles.container}>
				<Text>{t.state.title}</Text>
        <Echarts option={option} height={300} />
				<Button onPress={t.onPush.bind(t)} title='push'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%"
  },
  text: {
    fontSize: 24
  }
});
