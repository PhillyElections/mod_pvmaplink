<?php defined('_JEXEC') or die('Restricted access');
$document = &JFactory::getDocument();
$document->addCustomTag('<script src="/modules/mod_maplink/js/maplink.js" async defer></script>');
?>
<?php echo JText::_('RANDOM USERS'); ?>
<ul>
    <?php foreach ($items as $item) {?>
    <li>
        <?php echo JText::sprintf('USER LABEL', $item->name); ?>
    </li>
    <?php }
?>
</ul>
<form action="<?=JRoute::_('index.php?option=com_voterapp');?>" method="post" id="josForm" name="josForm" class="form-validate">

        <input type="text" id="address1" name="address1" size="60%" value="<?=$address1;?>" class="inputbox required" maxlength="60" placeholder="<?=JText::_('STREET PLACEHOLDER');?>" />

        <button class="button validate" type="submit"><?=JText::_('REGISTER');?></button>

<?=JHTML::_('form.token');?>
</form>