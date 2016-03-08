<?php
//no direct access
defined('_JEXEC') or die('Direct Access to this location is not allowed.');

$language = JFactory::getLanguage();
$language->load('mod_pvmaplink', JPATH_ADMIN);
$document = &JFactory::getDocument();
$document->addCustomTag('<script src="/modules/mod_pvmaplink/js/maplink.js" async defer></script>');
?>
<style>
.pac-container, .pac-item {
    width: inherit !important;
}
</style>
<form action="<?=JRoute::_('index.php?option=com_voterapp');?>" method="post" id="josForm" name="josForm" class="form-validate">
    <input type="text" id="address1" name="address1" width="23em" value="" class="inputbox" placeholder="<?=JText::_('ADDRESS PLACEHOLDER');?>" />
</form>
