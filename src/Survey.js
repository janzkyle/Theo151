import React, { Component } from "react";
import { Container } from "mdbreact";
import { Chart } from "react-chartjs-2";

export default class Survey extends Component {
  componentDidMount() {
    // Pie chart
    var ctxP = document.getElementById("pieChart").getContext("2d");
    var ctxP2 = document.getElementById("pieChart2").getContext("2d");
    var chart1 = new Chart(ctxP, {
      type: "pie",
      data: {
        labels: ["Catholic", "Non-Catholic Chirsitan", "Agnostic", "Atheist"],
        datasets: [
          {
            label: "Religion of SOSE students",
            data: [48, 7, 2, 1],
            backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1"],
            hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5"]
          }
        ]
      },
      options: {
        title: {
          fontSize: 36,
          display: true,
          text: "What is your religion?"
        },
        responsive: true
      }
    });
    var chart2 = new Chart(ctxP2, {
      type: "pie",
      data: {
        labels: ["Practicing", "Non-Practicing"],
        datasets: [
          {
            label: "SOSE Practicing",
            data: [28, 30],
            backgroundColor: ["#F7464A", "#46BFBD"],
            hoverBackgroundColor: ["#FF5A5E", "#5AD3D1"]
          }
        ]
      },
      options: {
        title: {
          fontSize: 36,
          display: true,
          text: "Are you practicing or non-practicing your religion?"
        },
        responsive: true
      }
    });
    //Bar Graph
    var ctxB = document.getElementById("barChart").getContext("2d");
    var ctxB2 = document.getElementById("barChart2").getContext("2d");
    var chart3 = new Chart(ctxB, {
      type: "bar",
      data: {
        labels: ["Irreconcilable", "2", "3", "4", "Related"],
        datasets: [
          {
            label: "",
            data: [5, 7, 8, 16, 22],
            backgroundColor: [
              "#F7464A",
              "#46BFBD",
              "#FDB45C",
              "#949FB1",
              "#4D5360"
            ],
            hoverBackgroundColor: [
              "#FF5A5E",
              "#5AD3D1",
              "#FFC870",
              "#A8B3C5",
              "#616774"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        title: {
          fontSize: 36,
          display: true,
          text: "Do you think science and religion can go hand-in-hand?"
        },
        responsive: true
      }
    });
    var chart4 = new Chart(ctxB2, {
      type: "bar",
      data: {
        labels: ["Strongly Disagree", "2", "3", "4", "Strongly Agree"],
        datasets: [
          {
            label: "",
            data: [5, 7, 9, 12, 25],
            backgroundColor: [
              "#F7464A",
              "#46BFBD",
              "#FDB45C",
              "#949FB1",
              "#4D5360"
            ],
            hoverBackgroundColor: [
              "#FF5A5E",
              "#5AD3D1",
              "#FFC870",
              "#A8B3C5",
              "#616774"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        title: {
          fontSize: 36,
          display: true,
          text: "My religious views do not affect the way I see science."
        },
        responsive: true
      }
    });
  }
  render() {
    return (
      <Container style={{ maxWidth: "80%" }} id={"Survey"}>
        <h1 className="h1-responsive font-weight-bold my-5 text-left">
          Survey Results
        </h1>
        <canvas id="pieChart"></canvas>
        <canvas id="pieChart2"></canvas>
        <canvas id="barChart"></canvas>
        <canvas id="barChart2"></canvas>
      </Container>
    );
  }
}
