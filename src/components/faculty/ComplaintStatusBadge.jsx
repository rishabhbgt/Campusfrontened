import {
    Clock3,
    LoaderCircle,
    CheckCircle2,
} from "lucide-react";

function ComplaintStatusBadge({ status }) {

    const statusConfig = {

        Pending: {
            label: "Pending",
            icon: Clock3,
            className:
                "border-amber-200 bg-amber-50 text-amber-700",
            iconClass:
                "text-amber-600",
        },

        "In Progress": {
            label: "In Progress",
            icon: LoaderCircle,
            className:
                "border-blue-200 bg-blue-50 text-blue-700",
            iconClass:
                "text-blue-600",
        },

        Resolved: {
            label: "Resolved",
            icon: CheckCircle2,
            className:
                "border-emerald-200 bg-emerald-50 text-emerald-700",
            iconClass:
                "text-emerald-600",
        },

    };


    const config =
        statusConfig[status] || {

            label: status || "Unknown",

            icon: Clock3,

            className:
                "border-slate-200 bg-slate-50 text-slate-600",

            iconClass:
                "text-slate-500",

        };


    const Icon = config.icon;


    return (

        <span
            className={`
                inline-flex
                items-center
                gap-1.5
                rounded-full
                border
                px-3
                py-1.5
                text-xs
                font-semibold
                whitespace-nowrap
                ${config.className}
            `}
            role="status"
            aria-label={`Complaint status: ${config.label}`}
        >

            <Icon
                size={14}
                className={config.iconClass}
                aria-hidden="true"
            />

            {config.label}

        </span>

    );

}

export default ComplaintStatusBadge;