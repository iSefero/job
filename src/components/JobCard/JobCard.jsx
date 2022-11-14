import React from "react"
import {Flex, Text, Image} from "@chakra-ui/react";
import {styles} from "./jobCardStyle";
import {EmptyBookmark, FullBookmark} from "../assets/icon/icons";
import {Rating, ThinStar} from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';
import {useSelector} from "react-redux";

const star = {
  itemShapes: ThinStar,
  activeFillColor: '#38415D',
  inactiveFillColor: '#CAD4F3',
  };

export const JobCard = ({createdAt, name, pictures, address, title}) => {
  const [bookmarkState, setBookmarkState ] = React.useState(false);
  const [rating, setRating] = React.useState(0);



  const bookmark = bookmarkState ? <FullBookmark/> : <EmptyBookmark/>;

  const changeBookMark = () => {
    setBookmarkState(!bookmarkState)
  };

  return(
            <Flex minHeight="165px" borderRadius="10px" padding="24px 16px" bg="#FFFFFF" width="100%" >
                <Flex style={styles.avatarBlock}>
                    <Image style={styles.avatar}  src={pictures[0]}/>
                </Flex>
                <Flex style={styles.contentWrapper} justifyContent="space-between">
                    <Flex style={styles.content}>
                        <Text style={styles.mainInfo}>{title}</Text>
                        <Flex>
                            <Text style={styles.name}>Department name • {name}</Text>
                        </Flex>
                        <Text style={styles.location}>{address}</Text>
                    </Flex>
                    <Flex style={styles.additionalInfo}>
                        <Flex width="100%" style={styles.rating}>
                          <Rating style={{width:120}} itemStyles={star} value={rating} onChange={setRating}/>
                        </Flex>
                        <Flex style={styles.period}>
                          <Flex style={styles.bookmark} onClick={changeBookMark}>
                            {bookmark}
                          </Flex>
                            <Text style={styles.periodText}>Posted {createdAt.substr(0,10)}</Text>
                        </Flex>
                    </Flex>
                </Flex>
        </Flex>
    )
}