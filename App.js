import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
} from "react-native-table-component";

export default class Tabla extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ["", "ID", "Nombre", "Sueldo"],
      tableTitle: ["1", "2", "3", "4"],
      tableData: [
        ["1", "Alberto", "7500"],
        ["2", "Jorge", "5000"],
        ["3", "Karla", "9000"],
        ["4", "Martin", "8000"],
      ],
    };
  }

  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Table borderStyle={{ borderWidth: 1 }}>
          <Row
            data={state.tableHead}
            flexArr={[1, 2, 1, 1]}
            style={styles.head}
            textStyle={styles.text}
          />
          <TableWrapper style={styles.wrapper}>
            <Col
              data={state.tableTitle}
              style={styles.title}
              heightArr={[28, 28]}
              textStyle={styles.text}
            />
            <Rows
              data={state.tableData}
              flexArr={[2, 1, 1]}
              style={styles.row}
              textStyle={styles.text}
            />
          </TableWrapper>
        </Table>
        <Button title="Cambiar" onPress={() => Alert.alert("Cambiar datos")} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff" },
  head: { height: 40, backgroundColor: "#ffff" },
  wrapper: { flexDirection: "row" },
  title: { flex: 1, backgroundColor: "#ffff" },
  row: { height: 28 },
  text: { textAlign: "center" },
});
