package auction.guad.service;

import java.util.List;

import auction.guad.dto.SellItemDto;

public interface SellItemService {

	public List<SellItemDto> sellItemList() throws Exception;
	public boolean insertSellItem(SellItemDto sellItemDto) throws Exception;
	public SellItemDto selectSellItemDetail(int itemNum) throws Exception;
	public void updateSellItem(SellItemDto sellItemDto) throws Exception;
	public void deleteSellItem(int itemNum) throws Exception;

	
}
