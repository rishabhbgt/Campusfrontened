import {
    useCallback,
    useEffect,
    useMemo,
    useState,
} from "react";

import {
    LogOut,
    AlertCircle,
    RefreshCw,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

import api from "../services/api";

import FacultyHeader
    from "../components/faculty/FacultyHeader";

import FacultyStats
    from "../components/faculty/FacultyStats";

import FacultyFilters
    from "../components/faculty/FacultyFilters";

import AssignedComplaintList
    from "../components/faculty/AssignedComplaintList";


function FacultyDashboard() {

    const navigate = useNavigate();

    const storedUser =
        localStorage.getItem("user");

    const currentUser =
        storedUser
            ? JSON.parse(storedUser)
            : null;


    const facultyName =
        currentUser?.fullName || "Faculty";

    const [
        complaints,
        setComplaints,
    ] = useState([]);


    const [
        loading,
        setLoading,
    ] = useState(true);


    const [
        error,
        setError,
    ] = useState("");


    const [
        search,
        setSearch,
    ] = useState("");


    const [
        statusFilter,
        setStatusFilter,
    ] = useState("All");


    const [
        priorityFilter,
        setPriorityFilter,
    ] = useState("All");


    const [
        categoryFilter,
        setCategoryFilter,
    ] = useState("All");


    // ==========================
    // FETCH ASSIGNED COMPLAINTS
    // ==========================

    const fetchAssignedComplaints =
        useCallback(async () => {

            try {

                setLoading(true);

                setError("");


                const token =
                    localStorage.getItem(
                        "token"
                    );


                if (!token) {

                    navigate("/");

                    return;

                }


                const response =
                    await api.get(
                        "/complaints/assigned",
                        {
                            headers: {
                                Authorization:
                                    token,
                            },
                        }
                    );


                setComplaints(
                    response.data?.complaints ||
                    []
                );


            } catch (error) {

                console.error(
                    "Faculty Complaints Error:",
                    error
                );


                const message =
                    error.response
                        ?.data
                        ?.message ||
                    "Failed to load assigned complaints";


                setError(message);


                toast.error(message);


                // Invalid / expired token

                if (
                    error.response
                        ?.status === 401
                ) {

                    localStorage.removeItem(
                        "token"
                    );

                    localStorage.removeItem(
                        "user"
                    );

                    navigate("/");

                }


            } finally {

                setLoading(false);

            }

        }, [navigate]);


    useEffect(() => {

        fetchAssignedComplaints();

    }, [
        fetchAssignedComplaints,
    ]);

    const filteredComplaints =
        useMemo(() => {

            return complaints.filter(
                (complaint) => {

                    const searchText =
                        search
                            .trim()
                            .toLowerCase();


                    const matchesSearch =
                        !searchText ||
                        complaint.title
                            ?.toLowerCase()
                            .includes(
                                searchText
                            ) ||
                        complaint.description
                            ?.toLowerCase()
                            .includes(
                                searchText
                            ) ||
                        complaint.category
                            ?.toLowerCase()
                            .includes(
                                searchText
                            );


                    const matchesStatus =
                        statusFilter ===
                            "All" ||
                        complaint.status ===
                            statusFilter;


                    const matchesPriority =
                        priorityFilter ===
                            "All" ||
                        complaint.priority ===
                            priorityFilter;


                    const matchesCategory =
                        categoryFilter ===
                            "All" ||
                        complaint.category ===
                            categoryFilter;


                    return (
                        matchesSearch &&
                        matchesStatus &&
                        matchesPriority &&
                        matchesCategory
                    );

                }
            );

        }, [
            complaints,
            search,
            statusFilter,
            priorityFilter,
            categoryFilter,
        ]);

    const handleLogout = () => {

        localStorage.removeItem(
            "token"
        );

        localStorage.removeItem(
            "user"
        );


        toast.success(
            "Logged out successfully"
        );


        navigate("/");

    };


    const handleViewComplaint =
        (complaint) => {

            navigate(
                `/complaint/${complaint._id}`
            );

        };


    const clearFilters = () => {

        setSearch("");

        setStatusFilter("All");

        setPriorityFilter("All");

        setCategoryFilter("All");

    };


    // ==========================
    // ERROR STATE
    // ==========================

    if (
        error &&
        !loading &&
        complaints.length === 0
    ) {

        return (

            <div
                className="
                    min-h-screen
                    bg-gradient-to-br
                    from-slate-100
                    via-blue-50
                    to-indigo-100
                    px-4
                    py-6
                    sm:px-6
                    lg:px-8
                "
            >

                <main
                    className="
                        mx-auto
                        max-w-7xl
                    "
                >

                    <FacultyHeader
                        facultyName={
                            facultyName
                        }
                        onRefresh={
                            fetchAssignedComplaints
                        }
                        loading={
                            loading
                        }
                    />


                    <div
                        className="
                            mt-8
                            flex
                            min-h-[400px]
                            items-center
                            justify-center
                            rounded-3xl
                            border
                            border-red-200
                            bg-white/80
                            p-8
                            text-center
                            shadow-xl
                            backdrop-blur-xl
                        "
                    >

                        <div
                            className="
                                max-w-md
                            "
                        >

                            <div
                                className="
                                    mx-auto
                                    flex
                                    h-16
                                    w-16
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    bg-red-50
                                    text-red-600
                                "
                            >

                                <AlertCircle
                                    size={30}
                                />

                            </div>


                            <h2
                                className="
                                    mt-5
                                    text-xl
                                    font-bold
                                    text-slate-900
                                "
                            >
                                Unable to load complaints
                            </h2>


                            <p
                                className="
                                    mt-2
                                    text-sm
                                    leading-6
                                    text-slate-500
                                "
                            >
                                {error}
                            </p>


                            <button
                                type="button"
                                onClick={
                                    fetchAssignedComplaints
                                }
                                className="
                                    mt-6
                                    inline-flex
                                    items-center
                                    gap-2
                                    rounded-2xl
                                    bg-indigo-600
                                    px-5
                                    py-3
                                    text-sm
                                    font-semibold
                                    text-white
                                    shadow-lg
                                    transition
                                    hover:bg-indigo-700
                                    active:scale-95
                                "
                            >

                                <RefreshCw
                                    size={17}
                                />

                                Try Again

                            </button>

                        </div>

                    </div>

                </main>

            </div>

        );

    }


    // ==========================
    // MAIN DASHBOARD
    // ==========================

    return (

        <div
            className="
                min-h-screen
                bg-gradient-to-br
                from-slate-100
                via-blue-50
                to-indigo-100
            "
        >

            <main
                className="
                    mx-auto
                    max-w-[1600px]
                    px-4
                    py-6
                    sm:px-6
                    sm:py-8
                    lg:px-8
                "
            >

                {/* ================= HEADER ================= */}

                <FacultyHeader
                    facultyName={
                        facultyName
                    }
                    onRefresh={
                        fetchAssignedComplaints
                    }
                    loading={
                        loading
                    }
                />


                {/* ================= LOGOUT ================= */}

                <div
                    className="
                        mt-4
                        flex
                        justify-end
                    "
                >

                    <button
                        type="button"
                        onClick={
                            handleLogout
                        }
                        className="
                            inline-flex
                            items-center
                            gap-2
                            rounded-xl
                            border
                            border-red-200
                            bg-white/80
                            px-4
                            py-2.5
                            text-sm
                            font-semibold
                            text-red-600
                            shadow-sm
                            transition-all
                            hover:bg-red-50
                            hover:shadow-md
                            active:scale-95
                        "
                    >

                        <LogOut
                            size={17}
                        />

                        Logout

                    </button>

                </div>


                {/* ================= STATS ================= */}

                <section
                    className="
                        mt-8
                    "
                >

                    <FacultyStats
                        complaints={
                            complaints
                        }
                    />

                </section>


                {/* ================= FILTERS ================= */}

                <section
                    className="
                        mt-8
                    "
                >

                    <FacultyFilters
                        search={
                            search
                        }
                        setSearch={
                            setSearch
                        }

                        statusFilter={
                            statusFilter
                        }
                        setStatusFilter={
                            setStatusFilter
                        }

                        priorityFilter={
                            priorityFilter
                        }
                        setPriorityFilter={
                            setPriorityFilter
                        }

                        categoryFilter={
                            categoryFilter
                        }
                        setCategoryFilter={
                            setCategoryFilter
                        }
                    />

                </section>


                {/* ================= RESULTS HEADER ================= */}

                <section
                    className="
                        mt-8
                        mb-5
                        flex
                        flex-col
                        gap-3
                        sm:flex-row
                        sm:items-center
                        sm:justify-between
                    "
                >

                    <div>

                        <h2
                            className="
                                text-2xl
                                font-bold
                                text-slate-900
                            "
                        >
                            Assigned Complaints
                        </h2>


                        <p
                            className="
                                mt-1
                                text-sm
                                text-slate-500
                            "
                        >
                            Showing{" "}
                            <span
                                className="
                                    font-semibold
                                    text-slate-700
                                "
                            >
                                {
                                    filteredComplaints.length
                                }
                            </span>{" "}
                            of{" "}
                            <span
                                className="
                                    font-semibold
                                    text-slate-700
                                "
                            >
                                {
                                    complaints.length
                                }
                            </span>{" "}
                            assigned complaints
                        </p>

                    </div>


                    {/* Clear Filter Shortcut */}

                    {(
                        search ||
                        statusFilter !==
                            "All" ||
                        priorityFilter !==
                            "All" ||
                        categoryFilter !==
                            "All"
                    ) && (

                        <button
                            type="button"
                            onClick={
                                clearFilters
                            }
                            className="
                                text-sm
                                font-semibold
                                text-indigo-600
                                transition
                                hover:text-indigo-800
                            "
                        >
                            Clear all filters
                        </button>

                    )}

                </section>


                {/* ================= LOADING ================= */}

                {loading ? (

                    <div
                        className="
                            grid
                            grid-cols-1
                            gap-5
                            lg:grid-cols-2
                            2xl:grid-cols-3
                        "
                    >

                        {[1, 2, 3].map(
                            (item) => (

                                <div
                                    key={item}
                                    className="
                                        h-[420px]
                                        animate-pulse
                                        rounded-3xl
                                        bg-white/70
                                        shadow-lg
                                    "
                                />

                            )
                        )}

                    </div>

                ) : (

                    /* ================= COMPLAINTS ================= */

                    <AssignedComplaintList
                        complaints={
                            filteredComplaints
                        }
                        onView={
                            handleViewComplaint
                        }
                    />

                )}

            </main>

        </div>

    );

}

export default FacultyDashboard;