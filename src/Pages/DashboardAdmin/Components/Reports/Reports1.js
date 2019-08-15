import React from "react";
import { Bar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class Reports extends React.Component {
  state = {
    dataBar: {
      labels: ["0", "1", "2", "3", "4", "5"],
      datasets: [
        {
          label: "Votes",
          data: [2, 5, 3, 12, 8, 10],
          backgroundColor: [
            "rgba(255, 134,159,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(255, 218, 128,0.4)",
            "rgba(113, 205, 205,0.4)",
            "rgba(170, 128, 252,0.4)",
            "rgba(255, 177, 101,0.4)"
          ],
          borderWidth: 2,
          borderColor: [
            "rgba(255, 134, 159, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(255, 218, 128, 1)",
            "rgba(113, 205, 205, 1)",
            "rgba(170, 128, 252, 1)",
            "rgba(255, 177, 101, 1)"
          ]
        }
      ]
    },
    barChartOptions: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [
          {
            barPercentage: 1,
            gridLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)"
            }
          }
        ],
        yAxes: [
          {
            gridLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)"
            },
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  }


  render() {
    return (
      <MDBContainer>
        <h3 className="mt-5">Course Evaluation - SCS </h3>
        <h5>Satisfication - Practicles</h5>
        <Bar data={this.state.dataBar} options={this.state.barChartOptions} />
      </MDBContainer>
    );
  }
}

export default Reports;