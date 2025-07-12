import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Input, Popover, Select, Space } from "antd";
import axios from "axios";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { useParams } from "react-router";
function SeatsLayout(props: any) {
  const params = useParams();
  const { control, register, getValues, watch } = useForm({
    defaultValues: {
      row: [
        {
          number: "A",
          type: "basic",
          columns: [
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "1",
              type: "basic"
            },
            {
              number: "2",
              type: "basic"
            },
            {
              number: "3",
              type: "basic"
            },
            {
              number: "4",
              type: "basic"
            },
            {
              number: "5",
              type: "basic"
            },
            {
              number: "6",
              type: "basic"
            },
            {
              number: "7",
              type: "basic"
            },
            {
              number: "8",
              type: "basic"
            },
            {
              number: "9",
              type: "basic"
            },
            {
              number: "10",
              type: "basic"
            },
            {
              number: "11",
              type: "basic"
            },
            {
              number: "12",
              type: "basic"
            },
            {
              number: "13",
              type: "basic"
            },
            {
              number: "14",
              type: "basic"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
          ]
        },
        {
          number: "0",
          type: "blank",
          columns: [
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
          ]
        },
        {
          number: "B",
          type: "basic",
          columns: [
            {
              number: "1",
              type: "basic"
            },
            {
              number: "2",
              type: "basic"
            },
            {
              number: "3",
              type: "basic"
            },
            {
              number: "4",
              type: "basic"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "5",
              type: "basic"
            },
            {
              number: "6",
              type: "basic"
            },
            {
              number: "7",
              type: "basic"
            },
            {
              number: "8",
              type: "basic"
            },
            {
              number: "9",
              type: "basic"
            },
            {
              number: "10",
              type: "basic"
            },
            {
              number: "11",
              type: "basic"
            },
            {
              number: "12",
              type: "basic"
            },
            {
              number: "13",
              type: "basic"
            },
            {
              number: "14",
              type: "basic"
            },
            {
              number: "15",
              type: "basic"
            },
            {
              number: "16",
              type: "basic"
            },
            {
              number: "17",
              type: "basic"
            },
            {
              number: "18",
              type: "basic"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "19",
              type: "basic"
            },
            {
              number: "20",
              type: "basic"
            }, {
              number: "21",
              type: "basic"
            },
            {
              number: "22",
              type: "basic"
            },
            {
              number: "23",
              type: "basic"
            },
            {
              number: "24",
              type: "basic"
            },
            {
              number: "25",
              type: "basic"
            },
            {
              number: "26",
              type: "basic"
            },
            {
              number: "27",
              type: "basic"
            },
            {
              number: "28",
              type: "basic"
            },
            {
              number: "29",
              type: "basic"
            },
          ]
        },
        {
          number: "C",
          type: "basic",
          columns: [
            {
              number: "1",
              type: "basic"
            },
            {
              number: "2",
              type: "basic"
            },
            {
              number: "3",
              type: "basic"
            },
            {
              number: "4",
              type: "basic"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "5",
              type: "basic"
            },
            {
              number: "6",
              type: "basic"
            },
            {
              number: "7",
              type: "basic"
            },
            {
              number: "8",
              type: "basic"
            },
            {
              number: "9",
              type: "basic"
            },
            {
              number: "10",
              type: "basic"
            },
            {
              number: "11",
              type: "basic"
            },
            {
              number: "12",
              type: "basic"
            },
            {
              number: "13",
              type: "basic"
            },
            {
              number: "14",
              type: "basic"
            },
            {
              number: "15",
              type: "basic"
            },
            {
              number: "16",
              type: "basic"
            },
            {
              number: "17",
              type: "basic"
            },
            {
              number: "18",
              type: "basic"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "19",
              type: "basic"
            },
            {
              number: "20",
              type: "basic"
            }, {
              number: "21",
              type: "basic"
            },
            {
              number: "22",
              type: "basic"
            },
            {
              number: "23",
              type: "basic"
            },
            {
              number: "24",
              type: "basic"
            },
            {
              number: "25",
              type: "basic"
            },
            {
              number: "26",
              type: "basic"
            },
            {
              number: "27",
              type: "basic"
            },
            {
              number: "28",
              type: "basic"
            },
            {
              number: "29",
              type: "basic"
            },
          ]
        },
        {
          number: "D",
          type: "basic",
          columns: [
            {
              number: "1",
              type: "basic"
            },
            {
              number: "2",
              type: "basic"
            },
            {
              number: "3",
              type: "basic"
            },
            {
              number: "4",
              type: "basic"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "5",
              type: "basic"
            },
            {
              number: "6",
              type: "basic"
            },
            {
              number: "7",
              type: "basic"
            },
            {
              number: "8",
              type: "basic"
            },
            {
              number: "9",
              type: "basic"
            },
            {
              number: "10",
              type: "basic"
            },
            {
              number: "11",
              type: "basic"
            },
            {
              number: "12",
              type: "basic"
            },
            {
              number: "13",
              type: "basic"
            },
            {
              number: "14",
              type: "basic"
            },
            {
              number: "15",
              type: "basic"
            },
            {
              number: "16",
              type: "basic"
            },
            {
              number: "17",
              type: "basic"
            },
            {
              number: "18",
              type: "basic"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "19",
              type: "basic"
            },
            {
              number: "20",
              type: "basic"
            }, {
              number: "21",
              type: "basic"
            },
            {
              number: "22",
              type: "basic"
            },
            {
              number: "23",
              type: "basic"
            },
            {
              number: "24",
              type: "basic"
            },
            {
              number: "25",
              type: "basic"
            },
            {
              number: "26",
              type: "basic"
            },
            {
              number: "27",
              type: "basic"
            },
            {
              number: "28",
              type: "basic"
            },
            {
              number: "29",
              type: "basic"
            },
          ]
        },
        {
          number: "E",
          type: "basic",
          columns: [
            {
              number: "1",
              type: "basic"
            },
            {
              number: "2",
              type: "basic"
            },
            {
              number: "3",
              type: "basic"
            },
            {
              number: "4",
              type: "basic"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "5",
              type: "basic"
            },
            {
              number: "6",
              type: "basic"
            },
            {
              number: "7",
              type: "basic"
            },
            {
              number: "8",
              type: "basic"
            },
            {
              number: "9",
              type: "basic"
            },
            {
              number: "10",
              type: "basic"
            },
            {
              number: "11",
              type: "basic"
            },
            {
              number: "12",
              type: "basic"
            },
            {
              number: "13",
              type: "basic"
            },
            {
              number: "14",
              type: "basic"
            },
            {
              number: "15",
              type: "basic"
            },
            {
              number: "16",
              type: "basic"
            },
            {
              number: "17",
              type: "basic"
            },
            {
              number: "18",
              type: "basic"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "19",
              type: "basic"
            },
            {
              number: "20",
              type: "basic"
            }, {
              number: "21",
              type: "basic"
            },
            {
              number: "22",
              type: "basic"
            },
            {
              number: "23",
              type: "basic"
            },
            {
              number: "24",
              type: "basic"
            },
            {
              number: "25",
              type: "basic"
            },
            {
              number: "26",
              type: "basic"
            },
            {
              number: "27",
              type: "basic"
            },
            {
              number: "28",
              type: "basic"
            },
            {
              number: "29",
              type: "basic"
            },
          ]
        },
        {
          number: "F",
          type: "basic",
          columns: [
            {
              number: "1",
              type: "basic"
            },
            {
              number: "2",
              type: "basic"
            },
            {
              number: "3",
              type: "basic"
            },
            {
              number: "4",
              type: "basic"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "5",
              type: "basic"
            },
            {
              number: "6",
              type: "basic"
            },
            {
              number: "7",
              type: "basic"
            },
            {
              number: "8",
              type: "basic"
            },
            {
              number: "9",
              type: "basic"
            },
            {
              number: "10",
              type: "basic"
            },
            {
              number: "11",
              type: "basic"
            },
            {
              number: "12",
              type: "basic"
            },
            {
              number: "13",
              type: "basic"
            },
            {
              number: "14",
              type: "basic"
            },
            {
              number: "15",
              type: "basic"
            },
            {
              number: "16",
              type: "basic"
            },
            {
              number: "17",
              type: "basic"
            },
            {
              number: "18",
              type: "basic"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "19",
              type: "basic"
            },
            {
              number: "20",
              type: "basic"
            }, {
              number: "21",
              type: "basic"
            },
            {
              number: "22",
              type: "basic"
            },
            {
              number: "23",
              type: "basic"
            },
            {
              number: "24",
              type: "basic"
            },
            {
              number: "25",
              type: "basic"
            },
            {
              number: "26",
              type: "basic"
            },
            {
              number: "27",
              type: "basic"
            },
            {
              number: "28",
              type: "basic"
            },
            {
              number: "29",
              type: "basic"
            },
          ]
        },
        {
          number: "G",
          type: "basic",
          columns: [
            {
              number: "1",
              type: "basic"
            },
            {
              number: "2",
              type: "basic"
            },
            {
              number: "3",
              type: "basic"
            },
            {
              number: "4",
              type: "basic"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "5",
              type: "basic"
            },
            {
              number: "6",
              type: "basic"
            },
            {
              number: "7",
              type: "basic"
            },
            {
              number: "8",
              type: "basic"
            },
            {
              number: "9",
              type: "basic"
            },
            {
              number: "10",
              type: "basic"
            },
            {
              number: "11",
              type: "basic"
            },
            {
              number: "12",
              type: "basic"
            },
            {
              number: "13",
              type: "basic"
            },
            {
              number: "14",
              type: "basic"
            },
            {
              number: "15",
              type: "basic"
            },
            {
              number: "16",
              type: "basic"
            },
            {
              number: "17",
              type: "basic"
            },
            {
              number: "18",
              type: "basic"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "19",
              type: "basic"
            },
            {
              number: "20",
              type: "basic"
            }, {
              number: "21",
              type: "basic"
            },
            {
              number: "22",
              type: "basic"
            },
            {
              number: "23",
              type: "basic"
            },
            {
              number: "24",
              type: "basic"
            },
            {
              number: "25",
              type: "basic"
            },
            {
              number: "26",
              type: "basic"
            },
            {
              number: "27",
              type: "basic"
            },
            {
              number: "28",
              type: "basic"
            },
            {
              number: "29",
              type: "basic"
            },
          ]
        },
        {
          number: "H",
          type: "basic",
          columns: [
            {
              number: "1",
              type: "basic"
            },
            {
              number: "2",
              type: "basic"
            },
            {
              number: "3",
              type: "basic"
            },
            {
              number: "4",
              type: "basic"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "5",
              type: "basic"
            },
            {
              number: "6",
              type: "basic"
            },
            {
              number: "7",
              type: "basic"
            },
            {
              number: "8",
              type: "basic"
            },
            {
              number: "9",
              type: "basic"
            },
            {
              number: "10",
              type: "basic"
            },
            {
              number: "11",
              type: "basic"
            },
            {
              number: "12",
              type: "basic"
            },
            {
              number: "13",
              type: "basic"
            },
            {
              number: "14",
              type: "basic"
            },
            {
              number: "15",
              type: "basic"
            },
            {
              number: "16",
              type: "basic"
            },
            {
              number: "17",
              type: "basic"
            },
            {
              number: "18",
              type: "basic"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "19",
              type: "basic"
            },
            {
              number: "20",
              type: "basic"
            }, {
              number: "21",
              type: "basic"
            },
            {
              number: "22",
              type: "basic"
            },
            {
              number: "23",
              type: "basic"
            },
            {
              number: "24",
              type: "basic"
            },
            {
              number: "25",
              type: "basic"
            },
            {
              number: "26",
              type: "basic"
            },
            {
              number: "27",
              type: "basic"
            },
            {
              number: "28",
              type: "basic"
            },
            {
              number: "29",
              type: "basic"
            },
          ]
        },
        {
          number: "0",
          type: "blank",
          columns: [
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
          ]
        },
        {
          number: "I",
          type: "basic",
          columns: [
            {
              number: "1",
              type: "basic"
            },
            {
              number: "2",
              type: "basic"
            },
            {
              number: "3",
              type: "basic"
            },
            {
              number: "4",
              type: "basic"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "5",
              type: "basic"
            },
            {
              number: "6",
              type: "basic"
            },
            {
              number: "7",
              type: "basic"
            },
            {
              number: "8",
              type: "basic"
            },
            {
              number: "9",
              type: "basic"
            },
            {
              number: "10",
              type: "basic"
            },
            {
              number: "11",
              type: "basic"
            },
            {
              number: "12",
              type: "basic"
            },
            {
              number: "13",
              type: "basic"
            },
            {
              number: "14",
              type: "basic"
            },
            {
              number: "15",
              type: "basic"
            },
            {
              number: "16",
              type: "basic"
            },
            {
              number: "17",
              type: "basic"
            },
            {
              number: "18",
              type: "basic"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "19",
              type: "basic"
            },
            {
              number: "20",
              type: "basic"
            }, {
              number: "21",
              type: "basic"
            },
            {
              number: "22",
              type: "basic"
            },
            {
              number: "23",
              type: "basic"
            },
            {
              number: "24",
              type: "basic"
            },
            {
              number: "25",
              type: "basic"
            },
          ]
        },
        {
          number: "J",
          type: "basic",
          columns: [
            {
              number: "1",
              type: "basic"
            },
            {
              number: "2",
              type: "basic"
            },
            {
              number: "3",
              type: "basic"
            },
            {
              number: "4",
              type: "basic"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "5",
              type: "basic"
            },
            {
              number: "6",
              type: "basic"
            },
            {
              number: "7",
              type: "basic"
            },
            {
              number: "8",
              type: "basic"
            },
            {
              number: "9",
              type: "basic"
            },
            {
              number: "10",
              type: "basic"
            },
            {
              number: "11",
              type: "basic"
            },
            {
              number: "12",
              type: "basic"
            },
            {
              number: "13",
              type: "basic"
            },
            {
              number: "14",
              type: "basic"
            },
            {
              number: "15",
              type: "basic"
            },
            {
              number: "16",
              type: "basic"
            },
            {
              number: "17",
              type: "basic"
            },
            {
              number: "18",
              type: "basic"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "19",
              type: "basic"
            },
            {
              number: "20",
              type: "basic"
            }, {
              number: "21",
              type: "basic"
            },
            {
              number: "22",
              type: "basic"
            },
            {
              number: "23",
              type: "basic"
            },
            {
              number: "24",
              type: "basic"
            },
            {
              number: "25",
              type: "basic"
            },
          ]
        },
        {
          number: "K",
          type: "basic",
          columns: [
            {
              number: "1",
              type: "basic"
            },
            {
              number: "2",
              type: "basic"
            },
            {
              number: "3",
              type: "basic"
            },
            {
              number: "4",
              type: "basic"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "5",
              type: "basic"
            },
            {
              number: "6",
              type: "basic"
            },
            {
              number: "7",
              type: "basic"
            },
            {
              number: "8",
              type: "basic"
            },
            {
              number: "9",
              type: "basic"
            },
            {
              number: "10",
              type: "basic"
            },
            {
              number: "11",
              type: "basic"
            },
            {
              number: "12",
              type: "basic"
            },
            {
              number: "13",
              type: "basic"
            },
            {
              number: "14",
              type: "basic"
            },
            {
              number: "15",
              type: "basic"
            },
            {
              number: "16",
              type: "basic"
            },
            {
              number: "17",
              type: "basic"
            },
            {
              number: "18",
              type: "basic"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "19",
              type: "basic"
            },
            {
              number: "20",
              type: "basic"
            }, {
              number: "21",
              type: "basic"
            },
            {
              number: "22",
              type: "basic"
            },
            {
              number: "23",
              type: "basic"
            },
            {
              number: "24",
              type: "basic"
            },
            {
              number: "25",
              type: "basic"
            },
          ]
        },
        {
          number: "L",
          type: "basic",
          columns: [
            {
              number: "1",
              type: "basic"
            },
            {
              number: "2",
              type: "basic"
            },
            {
              number: "3",
              type: "basic"
            },
            {
              number: "4",
              type: "basic"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "5",
              type: "basic"
            },
            {
              number: "6",
              type: "basic"
            },
            {
              number: "7",
              type: "basic"
            },
            {
              number: "8",
              type: "basic"
            },
            {
              number: "9",
              type: "basic"
            },
            {
              number: "10",
              type: "basic"
            },
            {
              number: "11",
              type: "basic"
            },
            {
              number: "12",
              type: "basic"
            },
            {
              number: "13",
              type: "basic"
            },
            {
              number: "14",
              type: "basic"
            },
            {
              number: "15",
              type: "basic"
            },
            {
              number: "16",
              type: "basic"
            },
            {
              number: "17",
              type: "basic"
            },
            {
              number: "18",
              type: "basic"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "19",
              type: "basic"
            },
            {
              number: "20",
              type: "basic"
            }, {
              number: "21",
              type: "basic"
            },
            {
              number: "22",
              type: "basic"
            },
            {
              number: "23",
              type: "basic"
            },
            {
              number: "24",
              type: "basic"
            },
            {
              number: "25",
              type: "basic"
            },
          ]
        },
        {
          number: "M",
          type: "basic",
          columns: [
            {
              number: "1",
              type: "basic"
            },
            {
              number: "2",
              type: "basic"
            },
            {
              number: "3",
              type: "basic"
            },
            {
              number: "4",
              type: "basic"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "5",
              type: "basic"
            },
            {
              number: "6",
              type: "basic"
            },
            {
              number: "7",
              type: "basic"
            },
            {
              number: "8",
              type: "basic"
            },
            {
              number: "9",
              type: "basic"
            },
            {
              number: "10",
              type: "basic"
            },
            {
              number: "11",
              type: "basic"
            },
            {
              number: "12",
              type: "basic"
            },
            {
              number: "13",
              type: "basic"
            },
            {
              number: "14",
              type: "basic"
            },
            {
              number: "15",
              type: "basic"
            },
            {
              number: "16",
              type: "basic"
            },
            {
              number: "17",
              type: "basic"
            },
            {
              number: "18",
              type: "basic"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "19",
              type: "basic"
            },
            {
              number: "20",
              type: "basic"
            }, {
              number: "21",
              type: "basic"
            },
            {
              number: "22",
              type: "basic"
            },
            {
              number: "23",
              type: "basic"
            },
            {
              number: "24",
              type: "basic"
            },
            {
              number: "25",
              type: "basic"
            },
          ]
        },
        {
          number: "N",
          type: "basic",
          columns: [
            {
              number: "1",
              type: "basic"
            },
            {
              number: "2",
              type: "basic"
            },
            {
              number: "3",
              type: "basic"
            },
            {
              number: "4",
              type: "basic"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "5",
              type: "basic"
            },
            {
              number: "6",
              type: "basic"
            },
            {
              number: "7",
              type: "basic"
            },
            {
              number: "8",
              type: "basic"
            },
            {
              number: "9",
              type: "basic"
            },
            {
              number: "10",
              type: "basic"
            },
            {
              number: "11",
              type: "basic"
            },
            {
              number: "12",
              type: "basic"
            },
            {
              number: "13",
              type: "basic"
            },
            {
              number: "14",
              type: "basic"
            },
            {
              number: "15",
              type: "basic"
            },
            {
              number: "16",
              type: "basic"
            },
            {
              number: "17",
              type: "basic"
            },
            {
              number: "18",
              type: "basic"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "19",
              type: "basic"
            },
            {
              number: "20",
              type: "basic"
            }, {
              number: "21",
              type: "basic"
            },
            {
              number: "22",
              type: "basic"
            },
            {
              number: "23",
              type: "basic"
            },
            {
              number: "24",
              type: "basic"
            },
            {
              number: "25",
              type: "basic"
            },
          ]
        },
        {
          number: "O",
          type: "basic",
          columns: [
            {
              number: "1",
              type: "basic"
            },
            {
              number: "2",
              type: "basic"
            },
            {
              number: "3",
              type: "basic"
            },
            {
              number: "4",
              type: "basic"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "5",
              type: "basic"
            },
            {
              number: "6",
              type: "basic"
            },
            {
              number: "7",
              type: "basic"
            },
            {
              number: "8",
              type: "basic"
            },
            {
              number: "9",
              type: "basic"
            },
            {
              number: "10",
              type: "basic"
            },
            {
              number: "11",
              type: "basic"
            },
            {
              number: "12",
              type: "basic"
            },
            {
              number: "13",
              type: "basic"
            },
            {
              number: "14",
              type: "basic"
            },
            {
              number: "15",
              type: "basic"
            },
            {
              number: "16",
              type: "basic"
            },
            {
              number: "17",
              type: "basic"
            },
            {
              number: "18",
              type: "basic"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "19",
              type: "basic"
            },
            {
              number: "20",
              type: "basic"
            }, {
              number: "21",
              type: "basic"
            },
            {
              number: "22",
              type: "basic"
            },
            {
              number: "23",
              type: "basic"
            },
            {
              number: "24",
              type: "basic"
            },
            {
              number: "25",
              type: "basic"
            },
          ]
        },
        {
          number: "P",
          type: "basic",
          columns: [
            {
              number: "1",
              type: "basic"
            },
            {
              number: "2",
              type: "basic"
            },
            {
              number: "3",
              type: "basic"
            },
            {
              number: "4",
              type: "basic"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "5",
              type: "basic"
            },
            {
              number: "6",
              type: "basic"
            },
            {
              number: "7",
              type: "basic"
            },
            {
              number: "8",
              type: "basic"
            },
            {
              number: "9",
              type: "basic"
            },
            {
              number: "10",
              type: "basic"
            },
            {
              number: "11",
              type: "basic"
            },
            {
              number: "12",
              type: "basic"
            },
            {
              number: "13",
              type: "basic"
            },
            {
              number: "14",
              type: "basic"
            },
            {
              number: "15",
              type: "basic"
            },
            {
              number: "16",
              type: "basic"
            },
            {
              number: "17",
              type: "basic"
            },
            {
              number: "18",
              type: "basic"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "19",
              type: "basic"
            },
            {
              number: "20",
              type: "basic"
            }, {
              number: "21",
              type: "basic"
            },
            {
              number: "22",
              type: "basic"
            },
            {
              number: "23",
              type: "basic"
            },
            {
              number: "24",
              type: "basic"
            },
            {
              number: "25",
              type: "basic"
            },
          ]
        },
        {
          number: "0",
          type: "blank",
          columns: [
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
          ]
        },
        {
          number: "Q",
          type: "basic",
          columns: [
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "1",
              type: "basic"
            },
            {
              number: "2",
              type: "basic"
            },
            {
              number: "3",
              type: "basic"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "4",
              type: "basic"
            },
            {
              number: "5",
              type: "basic"
            },
            {
              number: "6",
              type: "basic"
            },
            {
              number: "7",
              type: "basic"
            },
            {
              number: "8",
              type: "basic"
            },
            {
              number: "9",
              type: "basic"
            },
            {
              number: "10",
              type: "basic"
            },
            {
              number: "11",
              type: "basic"
            },
            {
              number: "12",
              type: "basic"
            },
            {
              number: "13",
              type: "basic"
            },
            {
              number: "14",
              type: "basic"
            },
            {
              number: "0",
              type: "blank"
            },
            {
              number: "15",
              type: "basic"
            },
            {
              number: "16",
              type: "basic"
            },
            {
              number: "17",
              type: "basic"
            },
            {
              number: "18",
              type: "basic"
            },
            {
              number: "19",
              type: "basic"
            },
          ]
        },
      ]
    }
  });
  const { fields: rows, append: addRow, remove: removeRow } = useFieldArray({ control, name: "row" });
  const tester = () => {
    axios.post(`${import.meta.env.VITE_API_URL}seats/layout`, { screenId: params.id, layout: getValues().row }).then(res => {
      console.log(res)
    })
  }




  return (
    <div className="p-[25px] flex flex-col gap-[10px]">
      <div className="flex flex-col gap-[10px]">
        {rows.map((field: any, index: any) => {
          let type = watch(`row.${index}.type`);
          let number = watch(`row.${index}.number`);
          return (
            <div key={index} className="flex gap-[10px]">
              <Popover content={<>
                <div className="grid grid-cols-1 gap-[10px]">
                  <Controller
                    name={`row.${index}.number`}
                    control={control}
                    defaultValue=""
                    render={({ field }) => <Input placeholder="Number" {...field} />}
                  />
                  <Controller
                    name={`row.${index}.type`}
                    control={control}
                    render={({ field }) => <Select placeholder="Type" {...field} >
                      <Select.Option value="basic">Basic</Select.Option>
                      <Select.Option value="blank">Blank</Select.Option>
                    </Select>}
                  />
                  <Button size="small" shape="circle" icon={<DeleteOutlined />} onClick={() => removeRow(index)} />
                </div>
              </>} title="Seat Info" trigger="click">
                {(() => {
                  switch (type) {
                    case "blank":
                      return <div className="size-[25px] rounded flex items-center justify-center mr-[10px]"></div>;
                    case "basic":
                      return <div className="size-[25px] text-xs border rounded flex items-center justify-center bg-black text-white mr-[10px]">{number ? number : 'R'}</div>;
                    default:
                      return <div className="size-[25px] text-xs border rounded flex items-center justify-center bg-black text-white mr-[10px]">{number ? number : 'R'}</div>;
                  }
                })()}
              </Popover>
              <Row control={control} register={register} index={index} watch={watch} />
            </div>
          )
        })}
      </div>
      <Space>
        <Button size="small" type="primary" onClick={() => addRow({})}>Add Row</Button>
        <Button size="small" onClick={() => { console.log(getValues()) }}>Print</Button>
        <Button size="small" onClick={tester}>Test</Button>
      </Space>
    </div>
  )
}
export default SeatsLayout
function Row({ control, index, register, watch }: any) {
  const { fields: columns, append: addColumn, remove: removeColumn } = useFieldArray({ control, name: `row.${index}.columns` });
  return (
    <div className="flex gap-[10px]">
      {columns.map((field: any, index1: any) => {
        let type = watch(`row.${index}.columns.${index1}.type`);
        let number = watch(`row.${index}.columns.${index1}.number`);
        return (
          <div key={index1}>
            <Popover content={<>
              <div className="grid grid-cols-1 gap-[10px]">
                <Controller
                  name={`row.${index}.columns.${index1}.number`}
                  control={control}
                  defaultValue=""
                  render={({ field }) => <Input placeholder="Number" {...field} />}
                />
                <Controller
                  name={`row.${index}.columns.${index1}.price`}
                  control={control}
                  defaultValue="0"
                  render={({ field }) => <Input placeholder="Price" {...field} />}
                />
                <Controller
                  name={`row.${index}.columns.${index1}.type`}
                  control={control}
                  render={({ field }) => <Select placeholder="Type" {...field} >
                    <Select.Option value="basic">Basic</Select.Option>
                    <Select.Option value="premium">Premium</Select.Option>
                    <Select.Option value="blank">Blank</Select.Option>
                  </Select>}
                />
                <Button shape="circle" size="small" icon={<DeleteOutlined />} onClick={() => removeColumn(index1)} />
              </div>
            </>} title="Seat Info" trigger="click">
              {(() => {
                switch (type) {
                  case "blank":
                    return <div className="size-[25px] rounded flex items-center justify-center"></div>;
                  case "basic":
                    return <div className="size-[25px] text-xs bg-gray-200 rounded flex items-center justify-center">{number ? number : 'C'}</div>;
                  case "premium":
                    return <div className="size-[25px] text-xs bg-amber-100 rounded flex items-center justify-center">{number ? number : 'C'}</div>;
                  default:
                    return <div className="size-[25px] text-xs border rounded flex items-center justify-center">{number ? number : 'C'}</div>;
                }
              })()}
            </Popover>
          </div>
        )
      })}
      <Button shape="circle" size="small" icon={<PlusOutlined />} onClick={() => addColumn({})} />
    </div>
  )
}