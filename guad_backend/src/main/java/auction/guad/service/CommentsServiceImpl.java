package auction.guad.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import auction.guad.dto.CommentsDto;
import auction.guad.mapper.CommentsMapper;

@Service
public class CommentsServiceImpl implements CommentsService{

	
	@Autowired
	private CommentsMapper commentsMapper;
	
	public List<CommentsDto> commentsList() throws Exception {
		return commentsMapper.commentsList();		
	}
	
	public int insertComment(CommentsDto commentsDto) throws Exception {
		return commentsMapper.insertComment(commentsDto);
		
	}
	
	
	public CommentsDto selectCommentDetail(int commentNum) throws Exception {
		return commentsMapper.selectCommentDetail(commentNum);
		
	}
	
	public void updateComment(CommentsDto commentsDto) throws Exception {
		    commentsMapper.updateComment(commentsDto);
		
	}
	
	public void deleteComment(int commentNum) throws Exception {
			commentsMapper.deleteComment(commentNum);
	}

	
}
