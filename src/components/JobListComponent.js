import React from "react";
import { FlatList, View } from "react-native";
import { styles } from "../styles/ScreenStyles";
import JobCard from "./JobListCard";



const JobList = (props) => {
	const Jobs = [
		{
			id: 1,
			salaryPerMonth: 40000,
			title: "Junior Franchise Manager",
			lastPosted: "5 days ago",
			company: "KFC",
			logoUri: "https://i.pinimg.com/originals/23/e6/64/23e664116abe4788c7d8750ab9379b5f.png"
		},
		{
			id: 2,
			salaryPerMonth: 60000,
			title: "Senior Project Manager",
			lastPosted: "6 days ago",
			company: "Google",
			logoUri: "https://i.dlpng.com/static/png/6909571_preview.png"
		},
		{
			id: 3,
			salaryPerMonth: 90000,
			title: "Visual Product Designer",
			lastPosted: "3 days ago",
			company: "Airbnb",
			logoUri: "https://vectorified.com/image/airbnb-vector-logo-11.png"
		},
		{
			id: 4,
			salaryPerMonth: 40000,
			title: "Junior Franchise Manager",
			lastPosted: "5 days ago",
			company: "KFC",
			logoUri: "https://i.pinimg.com/originals/23/e6/64/23e664116abe4788c7d8750ab9379b5f.png"
		},
		{
			id: 5,
			salaryPerMonth: 60000,
			title: "Senior Project Manager",
			lastPosted: "6 days ago",
			company: "Google",
			logoUri: "https://i.dlpng.com/static/png/6909571_preview.png"
		},
		{
			id: 6,
			salaryPerMonth: 90000,
			title: "Visual Product Designer",
			lastPosted: "3 days ago",
			company: "Airbnb",
			logoUri: "https://vectorified.com/image/airbnb-vector-logo-11.png"
		},
		{
			id: 7,
			salaryPerMonth: 40000,
			title: "Junior Franchise Manager",
			lastPosted: "5 days ago",
			company: "KFC",
			logoUri: "https://i.pinimg.com/originals/23/e6/64/23e664116abe4788c7d8750ab9379b5f.png"
		},
		{
			id: 8,
			salaryPerMonth: 60000,
			title: "Senior Project Manager",
			lastPosted: "6 days ago",
			company: "Google",
			logoUri: "https://i.dlpng.com/static/png/6909571_preview.png"
		},
		{
			id: 9,
			salaryPerMonth: 90000,
			title: "Visual Product Designer",
			lastPosted: "3 days ago",
			company: "Airbnb",
			logoUri: "https://vectorified.com/image/airbnb-vector-logo-11.png"
		},
		{
			id: 10,
			salaryPerMonth: 40000,
			title: "Junior Franchise Manager",
			lastPosted: "5 days ago",
			company: "KFC",
			logoUri: "https://i.pinimg.com/originals/23/e6/64/23e664116abe4788c7d8750ab9379b5f.png"
		},
		{
			id: 11,
			salaryPerMonth: 60000,
			title: "Senior Project Manager",
			lastPosted: "6 days ago",
			company: "Google",
			logoUri: "https://i.dlpng.com/static/png/6909571_preview.png"
		},
		{
			id: 12,
			salaryPerMonth: 90000,
			title: "Visual Product Designer",
			lastPosted: "3 days ago",
			company: "Airbnb",
			logoUri: "https://vectorified.com/image/airbnb-vector-logo-11.png"
		},
	]
	const Header = props.header;

	const ItemSeperator = () => (
		<View style={{ height: 5, flex: 1, backgroundColor: "#EFF3F9"}} />
		)
	return(
		<FlatList 
			data={ Jobs }
			renderItem={ ({ item }) => (
				<JobCard { ...item } />
				)}
			ListHeaderComponent={ Header }
			ItemSeparatorComponent={ ItemSeperator }
			keyExtractor={ (item) => item.id }
			contentContainerStyle={ styles.container }
		/>
		)
}

export default JobList;