export const nodeTemplates = [
	{
		label: "load-dataset",
		type: "custom",
		icon: "📥",
		color: "#E6897E",
		type: "load-dataset",
		params: {
			base_url: "https://fhir.rs.adarv.in/fhir",
			processed_data_path: "processed_data.csv",
			patients_df_path: "patients_df.csv",
			obs_names_path: "obs_names.pkl",
			cond_names_path: "cond_names.pkl",
			dataset_name: "LeptoDemo",
		},
	},

	{
		label: "correlation",
		type: "custom",
		icon: "🔗",
		color: "#B87EE6",
		type: "correlation",
		params: {
			input: "processed_data.csv",
			obs_names_path: "obs_names.pkl",
			cond_names_path: "cond_names.pkl",
		},
	},

	{
		label: "condition",
		type: "custom",
		icon: "🏥",
		color: "#7EE6B8",
		type: "condition",
		params: {
			input: "patients_df.csv",
		},
	},
	{
		label: "observation",
		type: "custom",
		icon: "🔍",
		color: "#7EB8E6",
		type: "observation",
		params: {
			input: "patients_df.csv",
		},
	},
	{
		label: "cluster",
		type: "custom",
		icon: "🎯",
		color: "#E6B87E",
		type: "cluster",
		params: {
			file: "processed_data.csv",
			features: "",
			clusters: "3",
			topx: "10",
		},
	},

	{
		label: "frequency",

		type: "custom",

		icon: "📊",

		color: "#7EE6E6",

		type: "frequency",

		params: {
			file: "processed_data.csv",

			column: "",

			proportion: "false",
		},
	},

	{
		label: "range",
		type: "custom",
		icon: "📏",
		color: "#E67EB8",
		type: "range",
		params: {
			file: "processed_data.csv",
			column: "",
		},
	},

	{
		label: "std",
		type: "custom",
		icon: "📐",
		color: "#B8E67E",
		type: "std",
		params: {
			file: "processed_data.csv",
			column: "",
		},
	},

	{
		label: "mode",
		type: "custom",
		icon: "🎲",
		color: "#E6E67E",
		type: "mode",
		params: {
			file: "processed_data.csv",
			column: "",
		},
	},

	{
		label: "median",
		type: "custom",
		icon: "📊",
		color: "#7E7EE6",
		type: "median",
		params: {
			file: "processed_data.csv",
			column: "",
		},
	},

	{
		label: "mean",
		type: "custom",
		icon: "📈",
		color: "#E67E7E",
		type: "mean",
		params: {
			file: "processed_data.csv",
			column: "",
		},
	},
	{
		label: "abbreviate",
		type: "custom",
		icon: "🔠",
		color: "#7EE67E",
		type: "abbreviate",
		params: {
			processed_data_path: "processed_data.csv",
			obs_names_path: "obs_names.pkl",
			cond_names_path: "cond_names.pkl",
			abbr_path: "abbreviation_data.csv",
		},
	},

	{
		label: "plot",
		type: "custom",
		icon: "📊",
		color: "#B87E7E",
		type: "plot",
		params: {
			data_file: "",
			csv_file: "",
			plot_type: "bar",
			operation: "",
			title: "",
			x_label: "",
			y_label: "",
			color_column: "",
			size_column: "",
			facet_column: "",
			width: "800",
			height: "600",
			output: "",
		},
	},
	{
		label: "join",
		type: "custom",
		icon: "🔗",
		color: "#FF6B6B",
		type: "join",
		params: {
			processed_files: "",
			patients_files: "",
			join_types: "inner",
			join_columns: "patient_id",
			output_processed: "joined_processed_data.csv",
			output_patients: "joined_patients_df.csv",
			suffixes: "_x,_y",
		},
	},
	{
		label: "symptom-pattern",
		type: "custom",
		icon: "🔍",
		color: "#E74C3C",
		type: "symptom-pattern",
		params: {
			input: "processed_data.csv",
			obs_names: "obs_names.pkl",
			cond_names: "cond_names.pkl",
			min_support: "0.1",
			min_confidence: "0.7",
			min_lift: "1.2",
			exclude_cols: ""
		},
	},
	{
		label: "covariance",
		type: "custom",
		icon: "📊",
		color: "#3498DB",
		type: "covariance",
		params: {
			input_file: "processed_data.csv",
			col1: "",
			col2: "",
		},
	},
	{
		label: "corr-coefficient",
		type: "custom",
		icon: "📈",
		color: "#1ABC9C",
		type: "corr-coefficient",
		params: {
			input_file: "processed_data.csv",
			col1: "",
			col2: "",
		},
	},
	{
		label: "prevalence",
		type: "custom",
		icon: "📊",
		color: "#F39C12",
		type: "prevalence",
		params: {
			input: "processed_data.csv",
			disease_col: "",
			case_value: "1",
		},
	},
];