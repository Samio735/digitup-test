import Button from "@mui/material/Button";
import { Card, CardContent } from "@mui/material";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

export default function SideBar() {
  return (
    <Card
      sx={{
        width: "15rem",
        height: "100vh",
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: "100",
      }}
    >
      <CardContent>
        <div className="flex justify-between items-center mb-4 text-gray-600">
          <p className="text-xl font-bold">OZ CORP</p>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="9.99999"
              cy="9.99999"
              r="0.833333"
              stroke="#4B465C"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="9.99999"
              cy="9.99999"
              r="0.833333"
              stroke="white"
              strokeOpacity="0.2"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="10"
              cy="10"
              r="7.5"
              stroke="#4B465C"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="10"
              cy="10"
              r="7.5"
              stroke="white"
              strokeOpacity="0.2"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <Button
          size="small"
          sx={{
            width: "100%",
            color: "grey",
            justifyContent: "start",
            textTransform: "none",
            marginBottom: "1rem",
          }}
          startIcon={<AccessAlarmIcon />}
        >
          Dashboard
        </Button>
        <p className="text-xs ms-6 mb-2 text-gray-400">APPLICATION</p>
        <Button
          size="small"
          sx={{
            width: "100%",
            color: "grey",
            justifyContent: "start",
            textTransform: "none",
          }}
          startIcon={<AccessAlarmIcon />}
        >
          Users
        </Button>
        <Button
          size="small"
          sx={{
            width: "100%",
            color: "grey",
            justifyContent: "start",
            textTransform: "none",
          }}
          startIcon={<AccessAlarmIcon />}
        >
          Transcations
        </Button>
        <Button
          size="small"
          sx={{
            width: "100%",
            color: "grey",
            justifyContent: "start",
            textTransform: "none",
          }}
          startIcon={<AccessAlarmIcon />}
        >
          KYC documents
        </Button>
        <Button
          size="small"
          sx={{
            width: "100%",
            color: "grey",
            justifyContent: "start",
            textTransform: "none",
          }}
          startIcon={<AccessAlarmIcon />}
        >
          Notifications
        </Button>
        <Button
          size="small"
          sx={{
            width: "100%",
            color: "grey",
            justifyContent: "start",
            textTransform: "none",
          }}
          startIcon={<AccessAlarmIcon />}
        >
          Tiquets
        </Button>
        <Button
          size="small"
          sx={{
            width: "100%",
            color: "grey",
            justifyContent: "start",
            textTransform: "none",
          }}
          startIcon={<AccessAlarmIcon />}
          variant="contained"
        >
          Gestion des concessions
        </Button>
        <Button
          size="small"
          sx={{
            width: "100%",
            color: "grey",
            justifyContent: "start",
            textTransform: "none",
          }}
          startIcon={<AccessAlarmIcon />}
        >
          Gestion des concessions
        </Button>
        <Button
          size="small"
          sx={{
            width: "100%",
            color: "grey",
            justifyContent: "start",
            textTransform: "none",
          }}
          startIcon={<AccessAlarmIcon />}
        >
          Patamètres
        </Button>
      </CardContent>
    </Card>
  );
}
