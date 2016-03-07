<?php
//no direct access
defined('_JEXEC') or die('Direct Access to this location is not allowed.');

$document = &JFactory::getDocument();
$document->addCustomTag('<script src="/modules/mod_maplink/js/maplink.js" async defer></script>');
?>
<form action="<?=JRoute::_('index.php?option=com_voterapp');?>" method="post" id="josForm" name="josForm" class="form-validate">
    <input type="text" id="address1" name="address1" value="<?=$address1;?>" class="inputbox" placeholder="<?=JText::_('STREET PLACEHOLDER');?>" />
</form>