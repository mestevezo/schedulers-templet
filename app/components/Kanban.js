import {
  KanbanComponent,
  ColumnsDirective,
  ColumnDirective,
} from "@syncfusion/ej2-react-kanban";

const kanbanData = [
  {
    Id: "Task 1",
    Title: "Task - 29001",
    Status: "Open",
    Summary: "Analyze the new requirements gathered from the customer.",
    Type: "Story",
    Priority: "Low",
    Tags: "Analyze,Customer",
    Estimate: 3.5,
    Assignee: "Nancy Davloio",
    RankId: 1,
    Color: "#02897B",
    ClassName: "e-story, e-low, e-nancy-davloio",
  },
  {
    Id: "Task 2",
    Title: "Task - 29002",
    Status: "InProgress",
    Summary: "Improve application performance",
    Type: "Improvement",
    Priority: "Normal",
    Tags: "Improvement",
    Estimate: 6,
    Assignee: "Andrew Fuller",
    RankId: 1,
    Color: "#673AB8",
    ClassName: "e-improvement, e-normal, e-andrew-fuller",
  },
  {
    Id: "Task 3",
    Title: "Task - 29003",
    Status: "Open",
    Summary: "Arrange a web meeting with the customer to get new requirements.",
    Type: "Others",
    Priority: "Critical",
    Tags: "Meeting",
    Estimate: 5.5,
    Assignee: "Janet Leverling",
    RankId: 2,
    Color: "#1F88E5",
    ClassName: "e-others, e-critical, e-janet-leverling",
  },
  {
    Id: "Task 4",
    Title: "Task - 29004",
    Status: "InProgress",
    Summary: "Fix the issues reported in the IE browser.",
    Type: "Bug",
    Priority: "Critical",
    Tags: "IE",
    Estimate: 2.5,
    Assignee: "Janet Leverling",
    RankId: 2,
    Color: "#E64A19",
    ClassName: "e-bug, e-release, e-janet-leverling",
  },
  {
    Id: "Task 5",
    Title: "Task - 29005",
    Status: "Review",
    Summary: "Fix the issues reported by the customer.",
    Type: "Bug",
    Priority: "Low",
    Tags: "Customer",
    Estimate: "3.5",
    Assignee: "Steven walker",
    RankId: 1,
    Color: "#E64A19",
    ClassName: "e-bug, e-low, e-steven-walker",
  },
];
const kanbanGrid = [
  { headerText: "Monday", keyField: "Open", allowToggle: true },

  { headerText: "Thuesday", keyField: "InProgress", allowToggle: true },

  {
    headerText: "Wednesday",
    keyField: "Testing",
    allowToggle: true,
    isExpanded: false,
  },

  { headerText: "Thursday", keyField: "Close", allowToggle: true },

  { headerText: "Friday", keyField: "Due", allowToggle: true },
];

const Kanban = () => (
  <KanbanComponent
    id="kanban"
    keyField="Status"
    dataSource={kanbanData}
    cardSettings={{ contentField: "Summary", headerField: "Id" }}
    swimlaneSettings={{
      keyField: "Assignee",
      allowDragAndDrop: true,
    }}
  >
    <ColumnsDirective>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      {kanbanGrid.map((item, index) => (
        <ColumnDirective key={index} {...item} />
      ))}
    </ColumnsDirective>
  </KanbanComponent>
);

export default Kanban;
