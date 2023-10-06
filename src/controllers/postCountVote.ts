import { Request, Response } from "express";
import Votes from "../models/Votes";
import User from "../models/Users";

const postCountVote = async (req: any, res: Response) => {
  const currentUser = req.user;
  const { id } = req.params;
  const uuid = id.split("_")[0];
  const _id = id.split("_")[1];
  const _votes = await Votes.findOne({
    where: {
      uuid,
    },
  });
  const votes = await _votes?.get();
  if(votes.validThrough.getTime() < new Date()){
    return  res.redirect("/vote/"+uuid)
  }

  const updateVote = async () => {
    await Votes.update(
      {
        votes: JSON.stringify(votecounts),
      },
      {
        where: {
          uuid,
        },
      }
    );
  };

  const votecounts = JSON.parse(votes.votes || "[]");
  // it there are exising voters
  // if (votecounts.length > 0) {
    const voterExists = votecounts.findIndex(
      (v: any) => v.voterId == currentUser.id
    ) ;
    console.log(voterExists);
    if (voterExists >=0) {
      votecounts[voterExists].choice = _id;
      await updateVote();
      return res.status(200).redirect("/vote/"+_votes?.get().uuid);
    }
    votecounts.push({
      voterId: currentUser.id,
      choice: _id,
    })
  // }

  await updateVote();
  return res.status(200).redirect("/vote/"+_votes?.get().uuid);
};

export default postCountVote;
